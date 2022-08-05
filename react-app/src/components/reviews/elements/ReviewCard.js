import React from "react";
import "./reviewCard.css";

function ReviewCard({ review }) {
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

  return (
    <div className="review-card-container">
      <p>{niceDate(review.updated_at)}</p>
      <h4>{review.review}</h4>
    </div>
  );
}

export default ReviewCard;
