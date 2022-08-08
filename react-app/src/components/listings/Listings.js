import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveListings } from "../../store/listings";
import { retrieveReviews } from "../../store/reviews";
import ListingCard from "../listings/Elements/ListingCard";
import "./listings.css";

function Listings() {
  const dispatch = useDispatch();
  const reviews = Object.values(useSelector((state) => state.reviews));
  const listings = Object.values(useSelector((state) => state.listings));

  useEffect(() => {
    dispatch(retrieveListings());
  }, [dispatch, listings.length]);

  useEffect(() => {
    dispatch(retrieveReviews());
  }, [dispatch, reviews.length]);

  return (
    <main>
      <div>
        {listings.length > 0 && (
          <div className="listing-container">
            {listings.map((listing) => {
              return <ListingCard key={listing.id} reviews={reviews} listing={listing} />;
            })}
          </div>
        )}
      </div>
    </main>
  );
}

export default Listings;
