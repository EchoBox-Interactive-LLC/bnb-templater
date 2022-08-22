import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { retrieveBookings } from "../../store/bookings";
import noTrips from "../../images/no_trips.webp";
import "./trips.css"

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

  return (
    <main>
      <div>
        <h1 id="trips-title">Trips</h1>
      </div>

      {/* <div>User Id: {user.id}</div> */}

      <div>
        {bookings &&
          bookings.map((booking) => {
            return <div>Check-In:{booking.start_date}</div>;
          })}
      </div>

      {/* If there are no bookings */}

      {bookings.length === 0 && (
        <div className="no-trips-container">
          <div>
            <h3>No trips booked... yet!</h3>
            <p>
              Time to dust off your bags and start planning your next adventure
            </p>
          </div>
          <div>
            <img id="no-trips-img" src={noTrips} alt="family on deck"/>
          </div>
        </div>
      )}
    </main>
  );
}

export default Trips;
