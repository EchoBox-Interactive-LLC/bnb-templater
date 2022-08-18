import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeReview } from "../../../store/reviews";

function DeleteReviewModal({ setShowDeleteReviewModal, review }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteReview = () => {
    dispatch(removeReview(review.id));
    history.push(`/listings/${review.listing_id}`);
  };

  const cancelDeleteReview = () => {
    setShowDeleteReviewModal(false);
  };

  return (
    <div>
      <div id="delete-review-modal-top" className="modal-top">
        <h3 id="delete-review-title" className="modal-title">
          Are you sure you want to delete your review?
        </h3>
        <button
          className="modal-cancel"
          onClick={cancelDeleteReview}
          type="button"
        >
          X
        </button>
      </div>
      <div className="submit-flex">
        <button id="delete-review-button" className="submit-button" onClick={deleteReview}>
          Delete Review
        </button>
      </div>
    </div>
  );
}

export default DeleteReviewModal;