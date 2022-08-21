/********************** ACTIONS **************************/

const CREATE_BOOKING = "booking/CREATE_BOOKING";
const READ_BOOKING = "booking/READ_BOOKING";
const UPDATE_BOOKING = "booking/UPDATE_BOOKING";
const DELETE_BOOKING = "booking/DELETE_BOOKING";

/********************** ACTION CREATORS **************************/

const createBooking = (booking) => ({
  type: CREATE_BOOKING,
  payload: booking,
});

const readBooking = (bookings) => ({
  type: READ_BOOKING,
  payload: bookings,
});

const updateBooking = (booking) => ({
  type: UPDATE_BOOKING,
  payload: booking,
});

const deleteBooking = (bookingId) => ({
  type: DELETE_BOOKING,
  payload: bookingId,
});

/***************************** THUNKS ***************************************/

export const makeBooking =
  (listing_id, user_id, start_date, end_date, guest_num, updated_at) =>
  async (dispatch) => {
    const response = await fetch("/api/bookings/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listing_id,
        user_id,
        start_date,
        end_date,
        guest_num,
        updated_at
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(createBooking(data));
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

export const retrieveBookings = () => async (dispatch) => {
  const response = await fetch("/api/bookings/");

  if (response.ok) {
    const data = await response.json();
    dispatch(readBooking(data));
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

export const editBooking =
  (booking_id, listing_id, user_id, start_date, end_date, guest_num, updated_at) =>
  async (dispatch) => {
    const response = await fetch(`/api/bookings/${booking_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listing_id,
        user_id,
        start_date,
        end_date,
        guest_num,
        updated_at
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(updateBooking(data));
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

export const removeBooking = (bookingId) => async (dispatch) => {
  const response = await fetch(`/api/bookings/${bookingId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteBooking(bookingId));
  }
};

/***************************** REDUCER ***************************************/

const initialState = {};

export default function reducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case CREATE_BOOKING:
      const booking = action.payload;
      newState[booking.id] = booking;
      return newState;
    case READ_BOOKING:
      newState = {};
      action.payload.bookings.forEach((booking) => {
        newState[booking.id] = booking;
      });
      return newState;
    case UPDATE_BOOKING:
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_BOOKING:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}
