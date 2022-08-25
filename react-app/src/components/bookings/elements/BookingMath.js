import React from "react";

function BookingMath({ listing, startDate, endDate }) {

  const howManyNights = () => {
    let nights = 4;
    console.log(startDate)
    console.log(endDate)
    return nights;
  }

   // Service free calc, using 3% for now
   let allNightsCost;
   if (listing) {
     allNightsCost = listing.price * howManyNights();
   }

  let numNightsContent;
  if (1 === 1) {
    numNightsContent = " night";
  } else {
    numNightsContent = " nights";
  }

  // Service free calc, using 3% for now
  let serviceFee;
  if (listing) {
    serviceFee = Math.round(listing.price * howManyNights() * 0.03);
  }

  // Calc for total amount
  let total;
  if (listing) {
    total = serviceFee + 150 + (listing.price * howManyNights());
  }

  return (
    <div>
      <div id="wont-be-charged">
        <p>You won't be charged yet</p>
      </div>
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
        <div id="rating">$150</div>
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
