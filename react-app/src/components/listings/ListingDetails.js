import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { removeListing, retrieveListings } from "../../store/listings";
import { retrieveReviews } from "../../store/reviews";
import UpdateListingForm from "./forms/UpdateListingForm";
import ReviewCard from "../reviews/elements/ReviewCard";

function ListingDetails() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { listingId } = useParams();
  const listing = useSelector((state) => state.listings[listingId]);
  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => state.reviews);

  const [showUpdateButton, setShowUpdateButton] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    dispatch(retrieveListings());
  }, [dispatch]);

  useEffect(() => {
    dispatch(retrieveReviews());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      return
    }
      if (listing) {
        if (user.id === listing.user_id) {
          setShowUpdateButton(true);
          setShowDeleteButton(true);
        }
      }
  }, [listing, user]);

  const updateListing = () => {
    setShowUpdateForm(true);
  };

  const deleteListing = () => {
    dispatch(removeListing(listingId));
    history.push("/");
  };

  return (
    <main>
      {!showUpdateForm && (
        <div>
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
          {showUpdateButton && listing && (
            <button onClick={updateListing}>Update Listing</button>
          )}
          {showDeleteButton && listing && (
            <button onClick={deleteListing}>Delete Listing</button>
          )}
          <div>
            <h1>Review Zone</h1>
          </div>
        </div>
      )}
      {showUpdateForm && (
        <UpdateListingForm setShowUpdateForm={setShowUpdateForm} listing={listing} />
      )}
    </main>
  );
}

export default ListingDetails;
