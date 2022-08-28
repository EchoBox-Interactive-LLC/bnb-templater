import React from "react";
import { useSelector } from "react-redux";
import dayjs from 'dayjs'

function BookingMath({ listing, startDate, endDate }) {
  const user = useSelector((state) => state.session.user)

// Calc for how many nights
    let nights = 1;
  const howManyNights = () => {
    if(!startDate) {
       return nights = 1;
    } else if (!endDate) {
       return nights = 1;
    } else if (!startDate && !endDate) {
       return nights = 1;
    }

    const dateStart = dayjs(startDate)
    const dateEnd = dayjs(endDate)

    nights = dateEnd.diff(dateStart, 'day')

    return nights;
  }

   // Service free calc, using 3% for now
   let allNightsCost;
   if (listing) {
     allNightsCost = listing.price * howManyNights();
   }

   // Set night and/nights on booking card
  let numNightsContent;
  if (nights === 1) {
    numNightsContent = " night";
  } else {
    numNightsContent = " nights";
  }

  // Service free calc, using 3% for now
  let cleaningFee;
  if (listing) {
    cleaningFee = Math.round(listing.cleaning_fee);
  }

  // Service free calc, using 3% for now
  let serviceFee;
  if (listing) {
    serviceFee = Math.round(listing.price * howManyNights() * 0.03);
  }

  // Calc for total amount
  let total;
  if (listing) {
    total = serviceFee + cleaningFee + (listing.price * howManyNights());
  }

  return (
    <div>
      {user && (<div id="wont-be-charged">
        <p>You won't be charged yet</p>
      </div>)}
      {!user && (<div id="sign-up-to-book">
        <h4>Log in or sign up to book</h4>
      </div>)}
      <div className="middle-booking-section">
        <div className="fee">
          <p>
            ${listing.price} x {howManyNights()} {numNightsContent}
          </p>
        </div>
        <div id="rating">${allNightsCost}</div>
      </div>
      <div className="middle-booking-section">
        <div className="fee">
          <p>Cleaning Fee</p>
        </div>
        <div id="rating">${cleaningFee}</div>
      </div>
      <div className="middle-booking-section">
        <div className="fee">
          <p>Service Fee</p>
        </div>
        <div className="service-fee">${serviceFee}</div>
      </div>
      <div className="total-booking-section">
        <div id="total-fee">
          <p>Total before taxes</p>
        </div>
        <div>${total}</div>
      </div>
    </div>
  );
}

export default BookingMath;
