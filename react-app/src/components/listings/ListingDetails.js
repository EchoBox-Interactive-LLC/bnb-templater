import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { retrieveListings } from "../../store/listings";

function ListingDetails() {
  const dispatch = useDispatch();

  const { listingId } = useParams();
  const listing = useSelector((state) => state.listings[listingId]);
  const user = useSelector((state) => state.session.user);

  const [showUpdateButton, setShowUpdateButton] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  useEffect(() => {
    dispatch(retrieveListings());
  }, [dispatch]);

  useEffect(() => {
    if (listing) {
      if (user.id === listing.user_id) {
        setShowUpdateButton(true);
        setShowDeleteButton(true);
      }
    }
  }, [user.id]);

  const updateListing = () => {
    return;
  };

  const deleteListing = () => {
    return;
  };

  return (
    <main>
      <h1>Listing Details Page</h1>
      {listing && (
        <div>
          <h1>{listing.title}</h1>
          <p>{listing.city}</p>
          <p>{listing.state}</p>
          <p>{listing.country}</p>
          {listing.images[0] && (
            <img src={listing.images[0].url} alt={listing.title} />
          )}
          <p>{listing.description}</p>
          <p>
            $<span>{listing.price}</span>night
          </p>
        </div>
      )}
      {!listing && <h1>This Listing Does Not Exist</h1>}
      {showUpdateButton && (
        <button onClick={updateListing}>Update Listing</button>
      )}
      {showDeleteButton && (
        <button onClick={deleteListing}>Delete Listing</button>
      )}
    </main>
  );
}

export default ListingDetails;
