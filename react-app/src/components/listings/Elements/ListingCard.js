import React from "react";
import "./listingCard.css"


function ListingCard({ listing }) {

  return (
    <div className="card-container">
      <h1>{listing.title}</h1>
      <h3>{listing.city}</h3>
      <h3>{listing.state}</h3>
      <h3>{listing.country}</h3>
    </div>
  )
}

export default ListingCard
