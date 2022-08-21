import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeBooking } from "../../../store/bookings";

function CreateBookingForm({ listing }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const listingId = listing.id;
    const userId = listing.user_id;
    const updated_at = new Date().toDateString();
   
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [guestNum, setGuestNum] = useState(1)
    const [errors, setErrors] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]);

    const submit = async (e) => {
        e.preventDefault();
        setErrors([]);

        if (!userId) {
            setErrors(["You must be logged in to book a listing"]);
            return;
          }

          let booking = await dispatch(
            makeBooking(
              userId,
              listingId,
              startDate,
              endDate,
              guestNum,
              updated_at
            )
          );
      
          if (booking.id) {
            history.push(`/trips`);
            return;
          }
      
          if (Array.isArray(booking)) {
            setErrors(booking);
          }
        };  
    

  return (
    <form onSubmit={submit}>
      <div>
        <label>CHECK-IN</label>
        <input type="date"></input>
      </div>
      <div>
        <label>CHECKOUT</label>
        <input type="date"></input>
      </div>
      <div className="error-container">
            {errorMessages.map((error, ind) => (
              <div className="errors" key={ind}>
                {error}
              </div>
            ))}
          </div>
          <div className="submit-flex">
            <button
              className="submit-button"
              id="create-booking-button"
              type="submit"
            >
              Reserve
            </button>
          </div>
    </form>
  );
}

export default CreateBookingForm;