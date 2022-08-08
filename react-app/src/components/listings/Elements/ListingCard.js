import React from "react";
import { Link } from "react-router-dom";
import "./listingCard.css";

function ListingCard({ listing }) {
  return (
    <div className="card-container">
      <Link className="listing-link" to={`/listings/${listing.id}`}>
        {listing.images[0] && (
          <img
            className="listing-img"
            src={listing.images[0].url}
            alt={listing.title}
          />
        )}
        <div className="listing-location">
          <h3 id="location">{`${listing.city}, ${listing.state}, ${listing.country}`}</h3>
        </div>
      </Link>
    </div>
  );
}

export default ListingCard;
