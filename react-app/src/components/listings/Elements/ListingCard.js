import React from "react";
import { Link } from "react-router-dom";
import "./listingCard.css";

function ListingCard({ listing, reviews }) {
  const listingReviews = reviews.filter((review) => review.listing_id === listing.id)
  const ratings = listingReviews.map((rating) => (rating.rating))
  const rating = ((ratings.reduce((a, b) => a + b, 0))/(ratings.length)).toFixed(2);



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
        <div className="line-under-img">
          <div className="listing-location">
            <h3 id="location">{`${listing.city}, ${listing.state}, ${listing.country}`}</h3>
          </div>
          <div className="listing-rating">
            <h3 id="rating">⭑{rating}</h3>
          </div>
        </div>
        <div className="listing-price">
          <h3 id="price">
            <span style={{ fontWeight: "700" }}>${listing.price}</span>
            <span> night</span>
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default ListingCard;
