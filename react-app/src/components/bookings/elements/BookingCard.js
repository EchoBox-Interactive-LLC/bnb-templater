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
      <div id="night-price">
        <span style={{ fontWeight: "bold" }}>${listing.price}</span> night
      </div>
      <div id="rating">⭑ {rating}</div>
      <div id="reviews-num">
        <div>{reviews.length}</div>
        <div id="review-word">{reviewsContent}</div>
      </div>
    </div>
  );
}

export default BookingCard;
