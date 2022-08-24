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
        <div className="splash-image">
          <div className="welcome-container">
            <div className="welcome">
              <span id="site-welcome">Welcome to Urbnb!</span>
              <h3>
              Scroll down to checkout all listings, click on a
              listing for the listing details.
              Feel free to log in and create a listing for other
              users to view! You will be able to add images to your listing,
              update your listing and, if desired, delete your listing. A logged
              in user can leave a review and rating for any listing. Checkout the top right
              corner of the page to get started!
                </h3>
            </div>
          </div>
        </div>
        {listings.length > 0 && (
          <div className="listing-container">
            {listings.map((listing) => {
              return (
                <ListingCard
                  key={listing.id}
                  reviews={reviews}
                  listing={listing}
                />
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

export default Listings;
