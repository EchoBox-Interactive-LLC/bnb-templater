import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveListings } from "../../store/listings";
import ListingCard from "../listings/Elements/ListingCard";

function Listings() {
  const listings = Object.values(useSelector((state) => state.listings));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveListings());
  }, [dispatch, listings.length]);

  return (
    <main>
      <h1>This will be the listing page!</h1>
      {listings.length > 0 && (
        <div>
          {listings.map((listing) => {
            return (
              <div key={listing.id}>
                <ListingCard listing={listing} />
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}

export default Listings;
