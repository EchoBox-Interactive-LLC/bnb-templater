import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { retrieveListings } from "../../store/listings";
import { retrieveReviews } from "../../store/reviews";
import ReviewCard from "../reviews/elements/ReviewCard";
import BookingCard from "../bookings/elements/BookingCard";
import ListingUserButtons from "./Elements/ListingUserButtons";
import "./listingDetails.css";

function ListingDetails() {
  const dispatch = useDispatch();

  const { listingId } = useParams();
  const listing = useSelector((state) => state.listings[listingId]);
  const images = useSelector((state) => state.images);
  const user = useSelector((state) => state.session.user);
  const reviews = Object.values(useSelector((state) => state.reviews)).filter(
    (review) => review.listing_id === +listingId
  );

  const listingReviews = reviews.filter(
    (review) => review.listing_id === +listingId
  );
  const ratings = listingReviews.map((rating) => rating.rating);
  let rating = (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2);

  if (rating === "NaN") {
    rating = "New";
  }
  
 
 

  useEffect(() => {
    dispatch(retrieveListings());
  }, [dispatch, reviews.length, images]);

  useEffect(() => {
    dispatch(retrieveReviews());
  }, [dispatch, reviews.length]);

  let reviewsContent;
  if (reviews.length === 1) {
    reviewsContent = " review";
  } else {
    reviewsContent = " reviews";
  }

  return (
    <main>
        <div>
          {listing && (
            <div className="page-container">
              <div className="top-info">
                <h1 id="title">{listing.title}</h1>
                <div className="flex-info">
                  <h3 id="rating">⭑ {rating} </h3>
                  <h3 id="num-of-reviews">• {reviews.length}</h3>
                  <h3 id="review-word">{reviewsContent}</h3>
                  <h3 id="location">{`  • ${listing.city}, ${listing.state}, ${listing.country}`}</h3>
                </div>
              </div>

              <div className="image-container-main">
                {listing.images[0] && (
                  <img
                    id="image-one"
                    src={listing.images[0].url}
                    alt={listing.title}
                  />
                )}
                <div className="image-container-right">
                  {listing.images[1] && (
                    <img
                      id="image-two"
                      src={listing.images[1].url}
                      alt={listing.title}
                    />
                  )}
                  {listing.images[2] && (
                    <img
                      id="image-three"
                      src={listing.images[2].url}
                      alt={listing.title}
                    />
                  )}
                  {listing.images[3] && (
                    <img
                      id="image-four"
                      src={listing.images[3].url}
                      alt={listing.title}
                    />
                  )}
                  {listing.images[4] && (
                    <img
                      id="image-five"
                      src={listing.images[4].url}
                      alt={listing.title}
                    />
                  )}
                </div>
              </div>
              <div className="listing-info">
              <div>
                <div className="hosted-by-section">
                  {listing.user && (
                    <div>
                      <div id="host">
                        Entire home hosted by {listing.user[0].username}
                      </div>
                    </div>
                  )}
                  {listing.user && (
                    <div>
                      <img
                        id="host-avatar"
                        src={listing.user[0].avatar}
                        alt="User Avatar"
                      />
                    </div>
                  )}
                </div>
               {listing && ( <div className="description-section">
                  <div>{listing.description}</div>
                </div>)}
               <div className="listing-buttons-section">
                  <ListingUserButtons user={user} listing={listing} listingId={listingId}/>
                </div>
              </div>
                <div className="booking-card-section">
                  <BookingCard listing={listing} reviews={reviews} rating={rating}/>
                </div>
              </div>
            </div>
          )}
          {!listing && <h1>This Listing Does Not Exist</h1>}
          <div>
            {reviews.length > 0 &&
              reviews.map((review) => {
                return <ReviewCard key={review.id} review={review} />;
              })}
          </div>
        </div>
    </main>
  );
}

export default ListingDetails;
