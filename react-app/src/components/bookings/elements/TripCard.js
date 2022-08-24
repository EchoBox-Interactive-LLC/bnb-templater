import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../modal/modal";
import CancelBookingModal from "./CancelBookingModal";
import "./tripCard.css";

function TripCard({ booking }) {
  const listing = useSelector((state) => state.listings[booking.listing_id]);
  const bookingId = booking.id;

  const prettyDate = (date) => {
    let year = date.split("-")[0];
    let month = date.split("-")[1];
    let day = date.split("-")[2];
    switch (month) {
      case "01":
        return `Jan ${day} ${year}`;
      case "02":
        return `Feb ${day} ${year}`;
      case "03":
        return `Mar ${day} ${year}`;
      case "04":
        return `Apr ${day} ${year}`;
      case "05":
        return `May ${day} ${year}`;
      case "06":
        return `Jun ${day} ${year}`;
      case "07":
        return `Jul ${day} ${year}`;
      case "08":
        return `Aug ${day} ${year}`;
      case "09":
        return `Sep ${day} ${year}`;
      case "10":
        return `Oct ${day} ${year}`;
      case "11":
        return `Nov ${day} ${year}`;
      default:
        return `Dec ${day} ${year}`;
    }
  };

  const [showCancelBookingModal, setShowCancelBookingModal] = useState(false);

  return (
    <div className="trip-card-container">
      {listing && (
        <div className="city">
          <h1 id="city-title">{listing.city}</h1>
          <h4 className="thin-text">Entire home hosted by {listing.user[0].username}</h4>
        </div>
      )}
      {booking && (
        <div className="booking-dates">
          <h3>{prettyDate(booking.start_date)}</h3>
          <h4 id="through">through</h4>
          <h3>{prettyDate(booking.end_date)}</h3>
        </div>
      )}
      {listing && (
        <div className="booking-address">
          <h3>{listing.address}</h3>
          <h3>
            {listing.city}, {listing.state}
          </h3>
          <h3>{listing.country}</h3>
        </div>
      )}
      {listing && (
        <div className="booking-image-container">
          <img id="booking-image"
            src={listing.images[0].url}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://images.unsplash.com/photo-1616555670626-09496d2eed9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
            }}
            alt={listing.title}
          />
          <button className="cancel-booking-button" id="cancel-booking-button" onClick={() => setShowCancelBookingModal(true)}>Cancel Booking</button>
        </div>
      )}
       {showCancelBookingModal && (
        <Modal onClose={() => setShowCancelBookingModal(true)}>
          <CancelBookingModal
            setShowCancelBookingModal={setShowCancelBookingModal}
            bookingId={bookingId}
          />
        </Modal>
      )}
    </div>
  );
}

export default TripCard;
