/********************** ACTIONS **************************/

const CREATE_IMAGE = "image/CREATE_IMAGE";
const READ_IMAGE = "image/READ_IMAGE";
const DELETE_IMAGE = "image/DELETE_IMAGE";

/********************** ACTIONS **************************/

const createImage = (image) => ({
  type: CREATE_IMAGE,
  payload: image,
});

const readImage = (images) => ({
  type: READ_IMAGE,
  payload: images,
});

const deleteImage = (imageId) => ({
  type: DELETE_IMAGE,
  payload: imageId,
});

/***************************** THUNKS ***************************************/

export const makeImage =
  (
    user_id,
    listing_id,
    url
  ) =>
  async (dispatch) => {
    const response = await fetch("/api/images/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        listing_id,
        url
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(createImage(data));
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

export const retrieveImage = () => async (dispatch) => {
    const response = await fetch("/api/images/");

    if (response.ok) {
      const data = await response.json();
      dispatch(readImage(data));
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

  export const removeImage = (imageId) => async (dispatch) => {
    const response = await fetch(`/api/images/${imageId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      dispatch(deleteImage(imageId));
    }
  };


/***************************** REDUCER ***************************************/

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case CREATE_IMAGE:
      const image = action.payload;
      newState[image.id] = image;
      return newState;
    case READ_IMAGE:
      newState = {};
      action.payload.images.forEach((image) => {
        newState[image.id] = image;
      });
      return newState;
    case DELETE_IMAGE:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}
