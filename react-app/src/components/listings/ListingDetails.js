import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { removeListing, retrieveListings } from "../../store/listings";
import { retrieveReviews } from "../../store/reviews";
import UpdateListingForm from "./forms/UpdateListingForm";
import ReviewCard from "../reviews/elements/ReviewCard";
import { Modal } from "../modal/modal";
import CreateReviewModal from "../reviews/elements/CreateReviewModal";

function ListingDetails() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { listingId } = useParams();
  const listing = useSelector((state) => state.listings[listingId]);
  const user = useSelector((state) => state.session.user);
  const reviews = Object.values(useSelector((state) => state.reviews)).filter(
    (review) => review.listing_id === +listingId);

  const [showUpdateButton, setShowUpdateButton] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showCreateReviewModal, setShowCreateReviewModal] = useState(false);


  useEffect(() => {
    dispatch(retrieveListings());
  }, [dispatch, reviews.length]);

  useEffect(() => {
    dispatch(retrieveReviews());
  }, [dispatch, reviews.length]);

  useEffect(() => {
    if (!user) {
      return;
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
    history.push(`/`);
  };

  const createReview = () => {
    setShowCreateReviewModal(true);
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
          {showUpdateButton && user && listing && (
            <button onClick={updateListing}>Update Listing</button>
          )}
          {showDeleteButton && user && listing && (
            <button onClick={deleteListing}>Delete Listing</button>
          )}
          {user && <button onClick={createReview}>Add Review</button>}
          {showCreateReviewModal && user && (
            <Modal onClose={() => setShowCreateReviewModal(false)}>
              <CreateReviewModal
                setShowCreateReviewModal={setShowCreateReviewModal}
              />
            </Modal>
          )}
          <div>
            {reviews.length > 0 &&
              reviews.map((review) => {
                return <ReviewCard key={review.id} review={review} />;
              })}
          </div>
        </div>
      )}
      {showUpdateForm && (
        <UpdateListingForm
          setShowUpdateForm={setShowUpdateForm}
          listing={listing}
        />
      )}
    </main>
  );
}

export default ListingDetails;
