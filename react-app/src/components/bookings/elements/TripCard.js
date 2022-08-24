import React from "react";
import { useSelector } from "react-redux";

function TripCard({ booking }) {
  const listing = useSelector((state) => state.listings[booking.listing_id]);

  return (
    <div>
      {listing && (
        <div>
          <h1>{listing.city}</h1>
          <h4>Entire home hosted by {listing.user[0].username}</h4>
        </div>
      )}
      {booking && (
        <div>
          <h3>{booking.start_date}</h3>
          <h3>{booking.end_date}</h3>
        </div>
      )}
      {listing && (
        <div>
          <h3>{listing.address}</h3>
          <h3>{listing.city}, {listing.state}</h3>
          <h3>{listing.country}</h3>
        </div>
      )}
      {listing && (
        <div>
          <img src={listing.images[0].url}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://images.unsplash.com/photo-1616555670626-09496d2eed9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
                          }} alt={listing.title} />
        </div>
      )}
    </div>
  );
}

export default TripCard;
