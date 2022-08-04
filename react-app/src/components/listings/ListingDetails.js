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
    (async () => {
      if (!listing) {
        const checkValidListing = await fetch(`api/listings/${listingId}`);
        if (checkValidListing.ok) return
        else history.push("/invalid-listing")
      }
    })();
    dispatch(retrieveListings());
  }, [dispatch]);

  return(
    <h1>Listing Details Page</h1>
  )
};

export default ListingDetails;
