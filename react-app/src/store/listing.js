/********************** ACTIONS **************************/

const CREATE_LISTING = "listing/CREATE_LISTING";
const READ_LISTING = "listing/READ_LISTING";
const UPDATE_LISTING = "listing/UPDATE_LISTING";
const DELETE_LISTING = "listing/DELETE_LISTING";

/********************** ACTION CREATORS **************************/

const createListing = listing => ({
  type: CREATE_LISTING,
  payload: listing,
});

const readListing = listings => ({
  type: READ_LISTING,
  payload: listings,
});

const updateListing = listing => ({
  type: UPDATE_LISTING,
  payload: listing,
});

const deleteListing = listingId => ({
  type: DELETE_LISTING,
});

/***************************** THUNKS ***************************************/

export const makeEvent =
  (
    user_id,
    category,
    name,
    image,
    date,
    description,
    price,
    occupancy,
    street_address,
    city,
    state,
    zipCode
  ) =>
  async dispatch => {
    const imageData = new FormData();
    imageData.append("image", image);

    const imageRes = await fetch(`/api/images/`, {
      method: "POST",
      body: imageData,
    });

    if (imageRes.ok) {
      image = await imageRes.json();
    } else if (imageRes.status < 500) {
      const data = await imageRes.json();
      if (data.errors) {
        return [data.errors];
      }
    } else {
      return ["An error occurred. Please try again."];
    }

    const response = await fetch("/api/events/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        category,
        name,
        image: image.url,
        date,
        description,
        price,
        occupancy,
        street_address,
        city,
        state,
        zipCode,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(createEvent(data));
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

export const acquireEvents = () => async dispatch => {
  const response = await fetch("/api/events/");

  if (response.ok) {
    const data = await response.json();
    dispatch(readEvent(data));
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

export const editEvent =
  (
    event_id,
    user_id,
    category,
    name,
    image,
    date,
    description,
    price,
    occupancy,
    street_address,
    city,
    state,
    zipCode
  ) =>
  async dispatch => {
    if (typeof image === "object") {
      const imageData = new FormData();
      imageData.append("image", image);

      const imageRes = await fetch(`/api/images/`, {
        method: "POST",
        body: imageData,
      });

      if (imageRes.ok) {
        image = await imageRes.json();
        image = image.url;
      } else if (imageRes.status < 500) {
        const data = await imageRes.json();
        if (data.errors) {
          return data.errors;
        }
      } else {
        return ["An error occurred. Please try again."];
      }
    }

    const response = await fetch(`/api/events/${event_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        category,
        name,
        image,
        date,
        description,
        price,
        occupancy,
        street_address,
        city,
        state,
        zipCode,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(updateEvent(data));
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

export const removeEvent = eventId => async dispatch => {
  const response = await fetch(`/api/events/${eventId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteEvent(eventId));
  }
};

/***************************** REDUCER ***************************************/

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case CREATE_EVENT:
      const event = action.payload;
      newState[event.id] = event;
      return newState;
    case READ_EVENT:
      newState = {};
      action.payload.events.forEach(event => {
        newState[event.id] = event;
      });
      return newState;
    case UPDATE_EVENT:
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_EVENT:
      delete newState[action.eventId];
      return newState;
    default:
      return state;
  }
}
