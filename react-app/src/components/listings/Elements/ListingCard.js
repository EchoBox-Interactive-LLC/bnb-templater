import React from "react";
import { Link } from "react-router-dom";
import "./listingCard.css";

function ListingCard({ listing }) {
  return (
    <div className="card-container">
      {listing.images[0] && (
        <Link to={`/listings/${listing.id}`}>
          <img
            className="listing-img"
            src={listing.images[0].url}
            alt={listing.title}
          />
        </Link>
      )}
      <Link to={`/listings/${listing.id}`}>
        <h1>{listing.title}</h1>
      </Link>
      <h3>{listing.city}</h3>
      <h3>{listing.state}</h3>
      <h3>{listing.country}</h3>
    </div>
  );
}

export default ListingCard;
