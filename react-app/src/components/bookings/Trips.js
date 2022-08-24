import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { retrieveBookings } from "../../store/bookings";
import { retrieveListings } from "../../store/listings";
import TripCard from "./elements/TripCard";
import noTrips from "../../images/no_trips.webp";
import wavingHand from "../../images/waving-hand.png";
import "./trips.css";

function Trips() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const bookings = Object.values(useSelector((state) => state.bookings)).filter(
    (booking) => booking.user_id === user.id
  );

  if (!user) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(retrieveBookings());
  }, [dispatch, bookings.length]);

  useEffect(() => {
    dispatch(retrieveListings());
  }, [dispatch]);

  const goHome = () => {
    history.push("/");
  };

  return (
    <main>
      <div>
        <h1 id="trips-title">Trips</h1>
      </div>

      {/* If there are bookings */}
      {bookings.length > 0 && (
        <div>
          <h2>Upcoming reservations</h2>
        </div>
      )}
      {bookings.length > 0 &&
        bookings.map((booking) => {
          return (
            <div key={booking.id}>
              <TripCard booking={booking} />
            </div>
          );
        })}

      {/* If there are no bookings */}
      {bookings.length === 0 && (
        <div className="no-trips-container">
          <div className="no-trips-left">
            <img id="waving-hand" src={wavingHand} alt="waving hand" />
            <h3>No trips booked... yet!</h3>
            <p>
              Time to dust off your bags and start planning your next adventure
            </p>
            <button className="start-searching-button" onClick={goHome}>
              Start Searching
            </button>
          </div>
          <div className="no-trips-right">
            <img id="no-trips-img" src={noTrips} alt="family on deck" />
          </div>
        </div>
      )}
    </main>
  );
}

export default Trips;
