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
        <h1>Update Review</h1>
        <form onSubmit={submit}>
          <div>
            <ul className="errors">
              {errors.length > 0 &&
                errors.map((error) => {
                  return <li key={error}>{error}</li>;
                })}
            </ul>
          </div>
          <div>
            <label htmlFor="review">Review</label>
            <textarea
              name="review"
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input
              name="rating"
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <button onClick={closeModal} type="button">
            Cancel
          </button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default UpdateReviewModal;
