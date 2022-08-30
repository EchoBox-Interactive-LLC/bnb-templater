import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { retrieveListings } from "../../store/listings";
import { retrieveReviews } from "../../store/reviews";
import ListingCard from "../listings/Elements/ListingCard";
// import "./myListings.css";

function WishlistPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);

  if (!user) {
    history.push("/")
  }

  const reviews = Object.values(useSelector((state) => state.reviews));
  const listings = Object.values(useSelector((state) => state.listings)).filter(
    (listing) => listing.user_id === user.id
  );

  useEffect(() => {
    dispatch(retrieveListings());
  }, [dispatch, listings.length]);

  useEffect(() => {
    dispatch(retrieveReviews());
  }, [dispatch, reviews.length]);

  return (
    <main>
        <div className="page-container">
      <h1 id="manage-your-listings">Your Wishlist</h1>
     {listings.length > 0 ? ( 
        <div>
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
      </div>) : <h2 id="no-listings">You do not have any listings yet... Create a new listing using the "New Listing" button in the navigation bar</h2>}
      </div>
    </main>
  );
}

export default WishlistPage;