/********************** ACTIONS **************************/

const CREATE_BOOKING = "booking/CREATE_BOOKING";
const READ_BOOKING = "booking/READ_BOOKING";
const UPDATE_BOOKING = "booking/UPDATE_BOOKING";
const DELETE_BOOKING = "booking/DELETE_BOOKING";

/********************** ACTION CREATORS **************************/

const createBooking = (booking) => ({
    type: CREATE_BOOKING,
    payload: booking
});

const readBooking = (bookings) => ({
    type: READ_BOOKING,
    payload: bookings
});

const updateBooking = (booking) => ({
    type: UPDATE_BOOKING,
    payload: booking
});

const deleteBooking = (bookingId) => ({
    type: DELETE_BOOKING,
    payload: bookingId
});

/***************************** THUNKS ***************************************/