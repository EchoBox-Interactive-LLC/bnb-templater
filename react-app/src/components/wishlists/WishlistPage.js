import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { retrieveListings } from "../../store/listings";
import { retrieveReviews } from "../../store/reviews";
import { retrieveWishlists } from "../../store/wishlists";
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
  let wishlists = Object.values(useSelector((state) => state.wishlists))
  let listingIds = wishlists.map((wishlistItem) => {return wishlistItem.listing_id})
  let listings = Object.values(useSelector((state) => state.listings))
  let wishlistListings = [];
  for (let i = 0; i < listings.length; i++) {
    const singleListing = listings[i];
    for (let j = 0; j < listingIds.length; j++) {
        const listingId = listingIds[j];
        if (singleListing.id === listingId) {
            wishlistListings.push(singleListing)
        }
    }
  }
  
  useEffect(() => {
    dispatch(retrieveListings());
    
  }, [dispatch, listings.length]);

  useEffect(() => {
    dispatch(retrieveReviews());
  }, [dispatch, reviews.length]);

  useEffect(() => {
    if (user) {
      dispatch(retrieveWishlists(user.id));
    }
  }, [dispatch, user, wishlists.length]);

  return (
    <main>
        <div className="page-container">
      <h1 id="manage-your-listings">Your Wishlist</h1>
     {wishlistListings.length > 0 ? ( 
        <div>
        {wishlistListings.length > 0 && (
          <div className="listing-container">
            {wishlistListings.map((wishlistListing) => {
              return (
                <ListingCard
                  key={wishlistListing.id}
                  reviews={reviews}
                  listing={wishlistListing}
                  user={user}
                  wishlists={wishlists}
                />
              );
            })}
          </div>
        )}
      </div>) : <h2 id="no-listings">You do not have any listings in your wishlist yet...</h2>}
      </div>
    </main>
  );
}

export default WishlistPage;