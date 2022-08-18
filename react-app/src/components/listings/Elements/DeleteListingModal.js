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
        setShowDeleteModal(false)
      };

    return (
        <div>
            <h1>Are you sure you want to delete your listing?</h1>
            <button onClick={cancelDeleteListing}>Cancel</button>
            <button onClick={deleteListing}>Delete Listing</button>
        </div>
    )
}

export default DeleteListingModal;