import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeBooking } from "../../../store/bookings";
import BookingMath from "../elements/BookingMath";

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
    if (errors.length > 0) {
      // Setting error messages
      let errorMsgs = errors.map((error) => {
        return error.split(":");
      });
      errorMsgs = errorMsgs.map((error) => {
        return error[1];
      });
      setErrorMessages(errorMsgs);

      // Parsing out error titles
      let errorTitles = errors.map((error) => {
        return error.split(":");
      });
      errorTitles = errorTitles.map((error) => {
        return error[0];
      });

      // Clear all CSS errors styles on each submit
      let startDateClassRemove = document.getElementById(
        "start-date-error-box"
      );
      startDateClassRemove.classList.remove("input-field-error");
      let startDateLabelClassRemove = document.getElementById(
        "start-date-label-create-booking"
      );
      startDateLabelClassRemove.classList.remove("input-label-error");
      let endDateClassRemove = document.getElementById("end-date-error-box");
      endDateClassRemove.classList.remove("input-field-error");
      let endDateLabelClassRemove = document.getElementById(
        "end-date-label-create-booking"
      );
      endDateLabelClassRemove.classList.remove("input-label-error");
      let guestsClassRemove = document.getElementById("guest-num-error-box");
      guestsClassRemove.classList.remove("input-field-error");
      let guestsLabelClassRemove = document.getElementById(
        "guest-num-label-create-booking"
      );
      guestsLabelClassRemove.classList.remove("input-label-error");

      // Set and/or Reset error CSS styles
      for (const errorTitle of errorTitles) {
        if (errorTitle === "Start_date") {
          let startDateClassAdd = document.getElementById("start-date-error-box");
          startDateClassAdd.classList.add("input-field-error");
          let startDateLabelClassAdd = document.getElementById(
            "start-date-label-create-booking"
          );
          startDateLabelClassAdd.classList.add("input-label-error");
        } else if (errorTitle === "End_Date" || errorTitle === "End_date" ) {
          let endDateClassAdd = document.getElementById("end-date-error-box");
          endDateClassAdd.classList.add("input-field-error");
          let endDateLabelClassAdd = document.getElementById(
            "end-date-label-create-booking"
          );
          endDateLabelClassAdd.classList.add("input-label-error");
        } else if (errorTitle === "Guest_Num") {
          let guestNumClassAdd = document.getElementById("guest-num-error-box");
          guestNumClassAdd.classList.add("input-field-error");
          let guestNumLabelClassAdd = document.getElementById(
            "guest-num-label-create-booking"
          );
          guestNumLabelClassAdd.classList.add("input-label-error");
        }
      }
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
              <label id="start-date-label-create-booking" htmlFor="start-date">CHECK-IN (Required)</label>
            </div>
            <input
              id="start-date-error-box"
              className="input-field"
              name="start-date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            ></input>
          </div>
          <div>
            <div className="input-label">
              <label id="end-date-label-create-booking" htmlFor="end-date">CHECKOUT (Required)</label>
            </div>
            <input
              id="end-date-error-box"
              className="input-field"
              name="end-date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            ></input>
          </div>
          <div>
            <div className="input-label">
              <label id="guest-num-label-create-booking" htmlFor="guests">GUESTS (Required)</label>
            </div>
            <select
              id="guest-num-error-box"
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
      <BookingMath listing={listing} startDate={startDate} endDate={endDate}/>
    </div>
  );
}

export default CreateBookingForm;
