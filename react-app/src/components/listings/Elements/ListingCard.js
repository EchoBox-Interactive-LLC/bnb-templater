import React from "react";


function ListingCard({ listing }) {

  return (
    <div>
      <h1>{listing.title}</h1>
      <h3>{listing.city}</h3>
      <h3>{listing.state}</h3>
      <h3>{listing.country}</h3>
    </div>
  )
}

export default ListingCard
