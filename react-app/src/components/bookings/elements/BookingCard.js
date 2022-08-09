import React from "react";
import "./bookingCard.css";

function BookingCard({ listing }) {
  return (
    <div>
      <h1>Booking Card</h1>
      <span style={{ fontWeight: "bold" }}>${listing.price}</span> night
    </div>
  );
}

export default BookingCard;
