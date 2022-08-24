import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeBooking } from "../../../store/bookings";

function CancelBookingModal({ setShowCancelBookingModal, bookingId }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const cancelBooking = () => {
    dispatch(removeBooking(bookingId));
    history.push(`/trips`);
  };

  const dontCancelBooking = () => {
    setShowCancelBookingModal(false);
  };

  return (
    <div>
      <div id="cancel-booking-modal-top" className="modal-top">
        <h3 id="cancel-booking-title" className="modal-title">
          Are you sure you want to cancel your booking?
        </h3>
        <button
          className="modal-cancel"
          onClick={dontCancelBooking}
          type="button"
        >
          X
        </button>
      </div>
      <div className="submit-flex">
        <button id="delete-listing-button" className="submit-button" onClick={cancelBooking}>
          Cancel Booking
        </button>
      </div>
    </div>
  );
}

export default CancelBookingModal;