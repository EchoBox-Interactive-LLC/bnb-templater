import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeListing } from "../../../store/listings";

function DeleteListingModal({ setShowDeleteModal, listingId }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteListing = () => {
    dispatch(removeListing(listingId));
    history.push(`/`);
  };

  const cancelDeleteListing = () => {
    setShowDeleteModal(false);
  };

  return (
    <div>
      <div id="delete-listing-modal-top" className="modal-top">
        <h3 id="delete-listing-title" className="modal-title">
          Are you sure you want to delete your listing?
        </h3>
        <button
          className="modal-cancel"
          onClick={cancelDeleteListing}
          type="button"
        >
          X
        </button>
      </div>
      <div className="submit-flex">
        <button id="delete-listing-button" className="submit-button" onClick={deleteListing}>
          Delete Listing
        </button>
      </div>
    </div>
  );
}

export default DeleteListingModal;
