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

export const makeBooking = (
    listing_id,
    user_id,
    start_date,
    end_date,
    updated_at
) => async (dispatch) => {
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
            updated_at
        })
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
        return ["An error occurred. Please try again."]
    }
};