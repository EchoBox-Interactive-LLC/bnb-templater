/********************** ACTIONS **************************/

const CREATE_LISTING = "listing/CREATE_LISTING";
const READ_LISTING = "listing/READ_LISTING";
const UPDATE_LISTING = "listing/UPDATE_LISTING";
const DELETE_LISTING = "listing/DELETE_LISTING";

/********************** ACTION CREATORS **************************/

const createListing = (listing) => ({
  type: CREATE_LISTING,
  payload: listing,
});

const readListing = (listings) => ({
  type: READ_LISTING,
  payload: listings,
});

const updateListing = (listing) => ({
  type: UPDATE_LISTING,
  payload: listing,
});

const deleteListing = (listingId) => ({
  type: DELETE_LISTING,
});

/***************************** THUNKS ***************************************/

export const makeListing =
  (
    user_id,
    title,
    description,
    address,
    city,
    state,
    country,
    price,
    updated_at
  ) =>
  async (dispatch) => {
    const response = await fetch("/api/listings/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        title,
        description,
        address,
        city,
        state,
        country,
        price,
        updated_at
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(createListing(data));
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

export const retrieveListings = () => async (dispatch) => {
  const response = await fetch("/api/listings/");

  if (response.ok) {
    const data = await response.json();
    dispatch(readListing(data));
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

export const editListing =
  (
    listing_id,
    user_id,
    title,
    description,
    address,
    city,
    state,
    country,
    price,
    updated_at
  ) =>
  async (dispatch) => {
    const response = await fetch(`/api/listings/${listing_id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listing_id,
        user_id,
        title,
        description,
        address,
        city,
        state,
        country,
        price,
        updated_at
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(updateListing(data));
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

export const removeListing = (listingId) => async (dispatch) => {
  const response = await fetch(`/api/listings/${listingId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteListing(listingId));
  }
};

/***************************** REDUCER ***************************************/

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case CREATE_LISTING:
      const listing = action.payload;
      newState[listing.id] = listing;
      return newState;
    case READ_LISTING:
      newState = {};
      action.payload.listings.forEach((listing) => {
        newState[listing.id] = listing;
      });
      return newState;
    case UPDATE_LISTING:
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_LISTING:
      delete newState[action.listingId];
      return newState;
    default:
      return state;
  }
}
