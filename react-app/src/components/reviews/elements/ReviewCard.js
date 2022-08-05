import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeReview } from "../../../store/reviews";
import { Modal } from "../../modal/modal";
import UpdateReviewModal from "./UpdateReviewModal";
import "./reviewCard.css";

function ReviewCard({ review }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const reviewId = review.id

  const [showUpdateButton, setShowUpdateButton] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [showUpdateReviewModal, setShowUpdateReviewModal] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    }
    if (review) {
      if (user.id === review.user_id) {
        setShowUpdateButton(true);
        setShowDeleteButton(true);
      }
    }
  }, [review, user]);

  const niceDate = (date) => {
    let year = date.split("-")[0];
    let month = date.split("-")[1];
    switch (month) {
      case "01":
        return `January ${year}`;
      case "02":
        return `February ${year}`;
      case "03":
        return `March ${year}`;
      case "04":
        return `April ${year}`;
      case "05":
        return `May ${year}`;
      case "06":
        return `June ${year}`;
      case "07":
        return `July ${year}`;
      case "08":
        return `August ${year}`;
      case "09":
        return `September ${year}`;
      case "10":
        return `October ${year}`;
      case "11":
        return `November ${year}`;
      default:
        return `December ${year}`;
    }
  };

  const updateReview = () => {
    setShowUpdateReviewModal(true);
  };

  const deleteReview = () => {
    dispatch(removeReview(review.id));
    history.push(`/listings/${review.listing_id}`);
  };

  return (
    <div className="review-card-container">
      <p>{niceDate(review.updated_at)}</p>
      <h4>{review.review}</h4>
      {showUpdateButton && user && review && (
        <button onClick={updateReview}>Update Review</button>
      )}
      {showDeleteButton && user && review && (
        <button onClick={deleteReview}>Delete Review</button>
      )}
      {showUpdateReviewModal && user && (
        <Modal onClose={() => setShowUpdateReviewModal(false)}>
          <UpdateReviewModal
            setShowUpdateReviewModal={setShowUpdateReviewModal}
            reviewId={reviewId}
          />
        </Modal>
      )}
    </div>
  );
}

export default ReviewCard;
