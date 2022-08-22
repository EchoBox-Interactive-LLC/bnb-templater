import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { retrieveBookings } from "../../store/bookings";


function Trips() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const bookings = Object.values(useSelector((state) => state.bookings)).filter((booking) => booking.user_id === user.id)


  if (!user) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(retrieveBookings())
  }, [dispatch, bookings.length])
  
  return (
    <main>
      <div>
        <h1>Trips</h1>
      </div>

    <div>User Id: {user.id}</div>
     
      <div>
        {bookings && (
          bookings.map((booking) => {
            return <div>Check-In:{booking.start_date}</div>
          })
        )}
      </div>

    </main>
  );
}

export default Trips;
