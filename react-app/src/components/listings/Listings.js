import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveListings } from "../../store/listings";
import ListingCard from "../listings/Elements/ListingCard";
import "./listings.css"

function Listings() {
  const listings = Object.values(useSelector((state) => state.listings));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveListings());
  }, [dispatch, listings.length]);

  return (
    <main>
      <div>
        {listings.length > 0 && (
          <div className="listing-container">
            {listings.map((listing) => {
              return <ListingCard key={listing.id} listing={listing} />;
            })}
          </div>
        )}
      </div>
    </main>
  );
}

export default Listings;
