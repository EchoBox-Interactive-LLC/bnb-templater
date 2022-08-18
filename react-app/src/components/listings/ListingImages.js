import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ImageCard from "../image_things/elements/ImageCard";
import { retrieveImage } from "../../store/images";
import { retrieveListings } from "../../store/listings";
import "./listingImages.css";

function ListingImages() {
  const { listingId } = useParams();
  const dispatch = useDispatch();


  const images = Object.values(useSelector((state) => state.images)).filter(
    (image) => {
      return image.listing_id === +listingId;
    }
  );
  const listing = useSelector((state) => state.listings[listingId])

  useEffect(() => {
    dispatch(retrieveImage());
    dispatch(retrieveListings())
  }, [dispatch]);

  return (
    <main>
      <div className="all-images-container">
        {images &&
          images.map((image) => {
            return (
             <ImageCard key={image.id} image={image} listing={listing}/>
            );
          })}
      </div>
    </main>
  );
}

export default ListingImages;
