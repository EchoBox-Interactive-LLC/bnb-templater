import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ListingImages () {
    const { listingId } = useParams();
    // Need to dispact listings or a single listing in order to get access
    // or dispatch the images but only for a single listing, second is prop more efficient
    // const listing = useSelector((state) => state.listings[+listingId]);
    // const image = listing.images[0];

    return(
        <main>
            {/* {images && (
                images.map((image) => {
                    return <img src={image.url} alt={listing.title}></img>
                })
            )} */}
        </main>
    )
}

export default ListingImages;