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
        <div className="welcome-container">
          <h3 className="welcome">Welcome to Urbnb! After logging in, create a listing for other users
          to view! You will be able to add images to your listing, update or listing and, if desired, delete your listing. A logged in user can leave a review on any listing.
          Checkout the top right corner of the page to get started or click on a listing to view details.</h3>
        </div>
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
