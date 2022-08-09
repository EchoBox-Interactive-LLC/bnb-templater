import React, { useEffect, useState } from "react";
import UpdateListingForm from "../forms/UpdateListingForm";
import { useDispatch } from "react-redux";
import { Modal } from "../../modal/modal";
import { useHistory } from "react-router-dom";
import CreateReviewModal from "../../reviews/elements/CreateReviewModal";
import { removeListing } from "../../../store/listings";
import CreateImageModal from "../../image_things/CreateImageModal";
import "./listingUserButtons.css";

function ListingUserButton({ user, listing, listingId }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showUpdateButton, setShowUpdateButton] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
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

  const createImage = () => {
    setShowCreateImageModal(true);
  };

  return (
    <div>
      {showUpdateButton && user && listing && (
        <button onClick={updateListing}>Update Listing</button>
      )}

      {showDeleteButton && user && listing && (
        <button onClick={deleteListing}>Delete Listing</button>
      )}

      {showCreateReviewModal && user && (
        <Modal onClose={() => setShowCreateReviewModal(false)}>
          <CreateReviewModal
            setShowCreateReviewModal={setShowCreateReviewModal}
          />
        </Modal>
      )}
      {user && userCheck && <button onClick={createImage}>Add an Image</button>}
      {showCreateImageModal && user && userCheck && (
        <Modal onClose={() => setShowCreateImageModal(false)}>
          <CreateImageModal setShowCreateImageModal={setShowCreateImageModal} />
        </Modal>
      )}
      {showUpdateForm && (
        <UpdateListingForm
          setShowUpdateForm={setShowUpdateForm}
          listing={listing}
        />
      )}
      {user && (<button onClick={createReview}>Add Review</button>)}
    </div>
  );
}

export default ListingUserButton;
