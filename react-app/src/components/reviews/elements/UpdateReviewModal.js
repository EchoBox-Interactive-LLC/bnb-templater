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
  const [rating, setRating] = useState(reviewInfo.rating || "");
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
          } else if (errorTitle === "Rating") {
            let ratingClassAdd = document.getElementById("rating-error-box");
            ratingClassAdd.classList.add("input-field-error");
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
            <textarea
              id="review-error-box"
              className="input-field"
              rows="4"
              placeholder="Write your review here (Required)"
              name="review"
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div>
            <input
              id="rating-error-box"
              className="input-field"
              placeholder="Rating (Required)"
              name="rating"
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
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
