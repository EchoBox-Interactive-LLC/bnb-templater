import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { retrieveListings } from "../../store/listings";

function ListingDetails () {
  const dispatch = useDispatch();
  const history = useHistory();

  const { listingId } =useParams();
  const listing = useSelector((state) => state.listings[listingId])
  const user = useSelector((state) => state.session.user)

  useEffect(() => {
    dispatch(retrieveListings());
  }, [dispatch, listingId, history]);

  return(
    <main>
      <h1>Listing Details Page</h1>
      {listing && (
        <div>
          <h1>{listing.title}</h1>
          <p>{listing.city}</p>
          <p>{listing.state}</p>
          <p>{listing.country}</p>
          <img
          src={listing.images[0].url}
          alt={listing.title}
        />
        <p>{listing.description}</p>
        <p>$<span>{listing.price}</span>night</p>
        </div>
      )}
      {!listing && (
        <h1>This Listing Does Not Exist</h1>
      )}
    </main>
  )
};

export default ListingDetails;
