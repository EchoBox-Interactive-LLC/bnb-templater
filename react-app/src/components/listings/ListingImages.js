import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { retrieveImage } from "../../store/images";
import "./listingImages.css";

function ListingImages() {
  const { listingId } = useParams();
  const dispatch = useDispatch();
  // Need to dispact listings or a single listing in order to get access
  // or dispatch the images but only for a single listing, second is prop more efficient
  const images = Object.values(useSelector((state) => state.images)).filter(
    (image) => {
      return image.listing_id === +listingId;
    }
  );

  useEffect(() => {
    dispatch(retrieveImage());
  }, [dispatch]);

  return (
    <main>
      <div className="all-images-container">
        {images &&
          images.map((image) => {
            return (
              <img
                className="standard-image"
                src={image.url}
                alt="listing"
              ></img>
            );
          })}
      </div>
    </main>
  );
}

export default ListingImages;
