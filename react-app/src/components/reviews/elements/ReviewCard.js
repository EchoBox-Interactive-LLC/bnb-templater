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
  const reviewId = review.id;

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
    let month = date.split(" ")[1];
    let year = date.split(" ")[3];
    switch (month) {
      case "Jan":
        return `January ${year}`;
      case "Feb":
        return `February ${year}`;
      case "Mar":
        return `March ${year}`;
      case "Apr":
        return `April ${year}`;
      case "May":
        return `May ${year}`;
      case "Jun":
        return `June ${year}`;
      case "Jul":
        return `July ${year}`;
      case "Aug":
        return `August ${year}`;
      case "Sep":
        return `September ${year}`;
      case "Oct":
        return `October ${year}`;
      case "Nov":
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
      <div className="review-heading">
        <div>
          <img id="user-avatar" src={review.user[0].avatar} alt="User Avatar" />
        </div>
        <div className="review-title">
          <div>
            <p id="review-username">{review.user[0].username}</p>
          </div>
          <p id="nice-date">{niceDate(review.updated_at)}</p>
        </div>
        <div className="review-single-rating">
          <div id="single-star-review">⭑ {review.rating}</div>
        </div>
      </div>
      <p id="review-blurb">{review.review}</p>
      {showUpdateButton && user && review && (
        <button className="little-button" onClick={updateReview}>Update Review</button>
      )}
      {showDeleteButton && user && review && (
        <button className="little-button" onClick={deleteReview}>Delete Review</button>
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
