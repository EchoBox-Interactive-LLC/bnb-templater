import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editReview } from "../../../store/reviews";

function UpdateReviewModal({ setShowUpdateReviewModal, reviewId }) {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user.id);
  const reviewInfo = Object.values(
    useSelector((state) => state.reviews)
  ).filter((review) => review.id === reviewId)[0];
  const updated_at = new Date().toDateString();
  const { listingId } = useParams();

  const [review, setReview] = useState(reviewInfo.review || "");
  const [rating, setRating] = useState(reviewInfo.rating || "");
  const [errors, setErrors] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (!userId) {
      setErrors(["You must be logged in to create a review."]);
      return;
    }

    let reviewData = await dispatch(
      editReview(reviewId, userId, listingId, review, rating, updated_at)
    );
    if (reviewData.id) {
      setShowUpdateReviewModal(false);
      return;
    }

    if (Array.isArray(reviewData)) {
      setErrors(reviewData);
    }
  };

  const closeModal = () => {
    setShowUpdateReviewModal(false);
  };

  return (
    <main>
      <div>
        <form onSubmit={submit}>
        <div className="modal-top">
            <h3 className="modal-title">Write A Review</h3>
            <button
              className="modal-cancel"
              onClick={closeModal}
              type="button"
            >
              X
            </button>
          </div>
          <div>
            <textarea
              className="input-field"
              rows="4"
              placeholder="Write your review here"
              name="review"
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div>
            <input
              className="input-field"
              placeholder="Rating"
              name="rating"
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="error-container">
            {errors.map((error, ind) => (
              <div className="errors" key={ind}>
                {error}
              </div>
            ))}
          </div>
          <div className="submit-flex">
          <button className="submit-button" id="update-review-button" type="submit">Submit Changes</button>
          </div>
          </form>
      </div>
    </main>
  );
}

export default UpdateReviewModal;
