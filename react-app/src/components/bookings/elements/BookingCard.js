import React from "react";
import CreateBookingForm from "../forms/CreateBookingForm";

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
      <div className="top-booking-section">
        <div id="night-price">
          <span style={{ fontWeight: "bold" }}>${listing.price}</span> night
        </div>
        <div className="booking-card-right">
          <div id="rating">⭑ {rating}</div>
          <div id="reviews-num">
            <div>
              • {reviews.length} {reviewsContent}
            </div>
          </div>
        </div>
      </div>
      <div>
        <CreateBookingForm listing={listing} />
      </div>
    </div>
  );
}

export default BookingCard;
