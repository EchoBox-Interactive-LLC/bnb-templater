import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Trips() {
  const history = useHistory();

  const user = useSelector((state) => state.session.user);

  if (!user) {
    history.push("/");
  }
  
  return (
    <main>
      <div>
        <h1>This will be the trips (bookings) page</h1>
      </div>
    </main>
  );
}

export default Trips;
