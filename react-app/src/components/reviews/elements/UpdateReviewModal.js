import React, { useState, useEffect } from "react";
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
  const [rating, setRating] = useState(reviewInfo.rating || "1");
  const [errors, setErrors] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    // Setting error messages
    if (errors.length > 0) {
      let errorMsgs = errors.map((error) => {
        return error.split(":");
      });
      errorMsgs = errorMsgs.map((error) => {
        return error[1];
      });
      setErrorMessages(errorMsgs);

      // Adding CSS to input fields that have errors
      if (errors.length > 0) {
        let errorTitles = errors.map((error) => {
          return error.split(":");
        });
        errorTitles = errorTitles.map((error) => {
          return error[0];
        });
        for (const errorTitle of errorTitles) {
          if (errorTitle === "Review") {
            let reviewClassAdd = document.getElementById("review-error-box");
            reviewClassAdd.classList.add("input-field-error");
            let reviewLabelClassAdd = document.getElementById(
              "review-label-update-review"
            );
            reviewLabelClassAdd.classList.add("input-label-error");
          } else if (errorTitle === "Rating") {
            let ratingClassAdd = document.getElementById("rating-error-box");
            ratingClassAdd.classList.add("input-field-error");
            let ratingLabelClassAdd = document.getElementById(
              "rating-label-update-review"
            );
            ratingLabelClassAdd.classList.add("input-label-error");
          }
        }
      }
    }
  }, [errors]);

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
            <button className="modal-cancel" onClick={closeModal} type="button">
              X
            </button>
          </div>
          <div>
          <div className="input-label">
              <label id="review-label-update-review">Review (Required)</label>
            </div>
            <textarea
              id="review-error-box"
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
          <div className="input-label">
              <label id="rating-label-update-review">Rating (Required)</label>
            </div>
            <select
              id="rating-error-box"
              className="input-field"
              placeholder="Rating"
              name="rating"
              value={rating}
              type="text"
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="error-container">
            {errorMessages.map((error, ind) => (
              <div className="errors" key={ind}>
                {error}
              </div>
            ))}
          </div>
          <div className="submit-flex">
            <button
              className="submit-button"
              id="update-review-button"
              type="submit"
            >
              Submit Changes
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default UpdateReviewModal;
