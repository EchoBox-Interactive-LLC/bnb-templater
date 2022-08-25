import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeBooking } from "../../../store/bookings";

function CreateBookingForm({ listing }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const listingId = listing.id;
  const user = useSelector((state) => state.session.user);
  const updated_at = new Date().toDateString();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guestNum, setGuestNum] = useState(1);
  const [errors, setErrors] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    // Setting error messages
    if (errors.length > 0) {
      let errorMsgs = errors.map((error) => {
        return error.split(":");
      });
      errorMsgs = errorMsgs.map((error) => {
        return error[1];
      });
      setErrorMessages(errorMsgs);
    }
  }, [errors]);

  const submit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (!user.id) {
      setErrors(["You must be logged in to book a listing"]);
      return;
    }

    if (endDate > startDate) {
      let booking = await dispatch(
        makeBooking(
          listingId,
          user.id,
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
    } else {
      setErrors(["End_Date: The end date must be after the start date"]);
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <div className="booking-inputs-container">
            <div className="input-label">
              <label htmlFor="start-date">CHECK-IN (Required)</label>
            </div>
            <input
              className="input-field"
              name="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            ></input>
          </div>
          <div>
            <div className="input-label">
              <label htmlFor="end-date">CHECKOUT (Required)</label>
            </div>
            <input
              className="input-field"
              name="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            ></input>
          </div>
          <div>
            <div className="input-label">
              <label htmlFor="guests">GUESTS (Required)</label>
            </div>
            <select
              className="input-field-select"
              name="guests"
              value={guestNum}
              onChange={(e) => setGuestNum(e.target.value)}
            >
              <option value={1}>1 guest</option>
              <option value={2}>2 guests</option>
              <option value={3}>3 guests</option>
              <option value={4}>4 guests</option>
              <option value={5}>5 guests</option>
              <option value={6}>6 guests</option>
              <option value={7}>7 guests</option>
              <option value={8}>8 guests</option>
              <option value={9}>9 guests</option>
              <option value={10}>10 guests</option>
              <option value={11}>11 guests</option>
              <option value={12}>12 guests</option>
              <option value={13}>13 guests</option>
              <option value={14}>14 guests</option>
              <option value={15}>15 guests</option>
            </select>
          </div>
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
    </div>
  );
}

export default CreateBookingForm;
