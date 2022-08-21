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

  // Service free calc, using 3% for now
  let serviceFee;
  if (listing) {
    serviceFee = Math.round(listing.price * 0.03);
  }

  // Calc for total amount
  let total;
  if (listing) {
    total = serviceFee + 150 + listing.price;
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
      <div>
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
    </div>
  );
}

export default BookingCard;
