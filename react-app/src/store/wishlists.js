/********************** ACTIONS **************************/

const CREATE_WISHLIST = "wishlist/CREATE_WISHLIST";
const READ_WISHLIST = "wishlist/READ_WISHLIST";
const DELETE_WISHLIST = "wishlist/DELETE_WISHLIST";

/********************** ACTIONS CREATORS **************************/

const createWishlist = (wishlist) => ({
    type: CREATE_WISHLIST,
    payload: wishlist,
  });
  
const readWishlist = (wishlists) => ({
    type: READ_WISHLIST,
    payload: wishlists,
});
  
const deleteWishlist = (wishlistId) => ({
    type: DELETE_WISHLIST,
    payload: wishlistId,
});

/***************************** THUNKS ***************************************/

export const makeWishlist =
  (
    user_id,
    listing_id
  ) =>
  async (dispatch) => {
    const response = await fetch("/api/wishlists/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        listing_id
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(createWishlist(data));
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

export const retrieveWishlists = () => async (dispatch) => {
    const response = await fetch("/api/wishlists/");

    if (response.ok) {
        const data = await response.json();
        dispatch(readWishlist(data));
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

export const removeWishlist = (wishlistId) => async (dispatch) => {
    const response = await fetch(`/api/wishlist/${wishlistId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        dispatch(deleteWishlist(wishlistId));
    }
};

/***************************** REDUCER ***************************************/

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case CREATE_WISHLIST:
      const wishlist = action.payload;
      newState[wishlist.id] = wishlist;
      return newState;
    case READ_WISHLIST:
      newState = {};
      action.payload.wishlists.forEach((wishlist) => {
        newState[wishlist.id] = wishlist;
      });
      return newState;
    case DELETE_WISHLIST:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}