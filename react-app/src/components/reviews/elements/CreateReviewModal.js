import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { makeReview } from "../../../store/reviews"

function CreateReviewModal({ setShowCreateReviewModal }) {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user.id);
  const updated_at = new Date().toDateString();
  const { listingId } = useParams();

  const [review, setReview] = useState("")
  const [rating, setRating] = useState("")

  return (
    <h1>Charlie Brown</h1>
  )
}


export default CreateReviewModal;
