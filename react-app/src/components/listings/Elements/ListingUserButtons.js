import React, { useEffect, useState } from "react";
import UpdateListingForm from "../forms/UpdateListingForm";
import { useSelector } from "react-redux";
import { Modal } from "../../modal/modal";
import DeleteListingModal from "./DeleteListingModal";
import CreateReviewModal from "../../reviews/elements/CreateReviewModal";
import CreateImageModal from "../../image_things/CreateImageModal";
import "./listingUserButtons.css";

function ListingUserButton({ listing, listingId }) {
  const user = useSelector((state) => state.session.user);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showUpdateButton, setShowUpdateButton] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [showReviewButton, setShowReviewButton] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateReviewModal, setShowCreateReviewModal] = useState(false);
  const [showCreateImageModal, setShowCreateImageModal] = useState(false);
  const [userCheck, setUserCheck] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    }

    if (listing) {
      if (user.id === listing.user_id) {
        setShowUpdateButton(true);
        setShowDeleteButton(true);
        setUserCheck(true);
        setShowReviewButton(false);
      }
    }
  }, [listing, user]);

  const updateListing = () => {
    setShowUpdateForm(true);
  };

  const createReview = () => {
    setShowCreateReviewModal(true);
  };

  const createImage = () => {
    setShowCreateImageModal(true);
  };

  return (
    <main>
      <div className="listing-buttons-flexbox">
        {!user && (<div>
          <h2>Log in or sign up to write review!</h2>
        </div>)}
        {showUpdateButton && user && listing && (
          <button className="cool-button" onClick={updateListing}>
            Update Listing
          </button>
        )}

        {showDeleteButton && user && listing && (
          <button
            className="cool-button"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete Listing
          </button>
        )}

        {showDeleteModal && user && (
          <Modal onClose={() => setShowDeleteModal(false)}>
            <DeleteListingModal
              setShowDeleteModal={setShowDeleteModal}
              listingId={listingId}
            />
          </Modal>
        )}

        {showCreateReviewModal && user && (
          <Modal onClose={() => setShowCreateReviewModal(false)}>
            <CreateReviewModal
              setShowCreateReviewModal={setShowCreateReviewModal}
            />
          </Modal>
        )}
        {user && userCheck && (
          <button className="cool-button" onClick={createImage}>
            Add an Image
          </button>
        )}
        {showCreateImageModal && user && userCheck && (
          <Modal onClose={() => setShowCreateImageModal(false)}>
            <CreateImageModal
              setShowCreateImageModal={setShowCreateImageModal}
            />
          </Modal>
        )}
        {showUpdateForm && (
          <Modal onClose={() => setShowUpdateForm(false)}>
            <UpdateListingForm
              setShowUpdateForm={setShowUpdateForm}
              listing={listing}
            />
          </Modal>
        )}
        {showReviewButton && user && (
          <button className="cool-button" onClick={createReview}>
            Add Review
          </button>
        )}
      </div>
    </main>
  );
}

export default ListingUserButton;
