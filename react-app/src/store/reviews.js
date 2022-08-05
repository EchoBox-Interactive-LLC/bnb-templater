/********************** ACTIONS **************************/

const CREATE_REVIEW = "review/CREATE_REVIEW";
const READ_REVIEW = "review/READ_REVIEW";
const UPDATE_REVIEW = "review/UPDATE_REVIEW";
const DELETE_REVIEW = "review/DELETE_REVIEW";

/********************** ACTIONS **************************/

const createReview = (review) => ({
  type: CREATE_REVIEW,
  payload: review,
});

const readReview = (reviews) => ({
  type: READ_REVIEW,
  payload: reviews,
});

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  payload: review,
});

const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  payload: reviewId,
});

/***************************** THUNKS ***************************************/

export const makeReview =
  (
    user_id,
    listing_id,
    review,
    rating,
    updated_at
  ) =>
  async (dispatch) => {
    const response = await fetch("/api/reviews/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        listing_id,
        review,
        rating,
        updated_at
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(createReview(data));
      return data;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
  };

export const retrieveReviews = () => async (dispatch) => {
    const response = await fetch("/api/reviews/");

    if (response.ok) {
      const data = await response.json();
      dispatch(readReview(data));
      return data;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
  };


export const editReview =
  (
    review_id,
    user_id,
    listing_id,
    review,
    rating,
    updated_at
  ) =>
  async (dispatch) => {
    const response = await fetch(`/api/reviews/${review_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        listing_id,
        review,
        rating,
        updated_at
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(updateReview(data));
      return data;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
  };

  export const removeReview = (reviewId) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${reviewId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      dispatch(deleteReview(reviewId));
    }
  };


/***************************** REDUCER ***************************************/

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case CREATE_REVIEW:
      const review = action.payload;
      newState[review.id] = review;
      return newState;
    case READ_REVIEW:
      newState = {};
      action.payload.reviews.forEach((review) => {
        newState[review.id] = review;
      });
      return newState;
    case UPDATE_REVIEW:
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_REVIEW:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}
