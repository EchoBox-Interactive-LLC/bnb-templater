import React from "react";
import "./bookingCard.css";

function BookingCard({ listing, reviews, rating }) {

    let reviewsContent;
    if (reviews.length === 1) {
      reviewsContent = " review";
    } else {
      reviewsContent = " reviews";
    }

  return (
    <div className="booking-card-container">
      <span style={{ fontWeight: "bold" }}>${listing.price}</span> night
      <div>⭑ {rating}</div>
      <div>{reviews.length}</div>
      <div id="review-word">{reviewsContent}</div>
    </div>
  );
}

export default BookingCard;
