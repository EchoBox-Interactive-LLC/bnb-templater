import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { retrieveListings } from "../../store/listings";
import { retrieveReviews } from "../../store/reviews";
import ReviewCard from "../reviews/elements/ReviewCard";
import BookingCard from "../bookings/elements/BookingCard";
import ListingUserButtons from "./Elements/ListingUserButtons";
import FourOFour from "../404/FourOFour";
import "./listingDetails.css";
import ShowImagesButton from "../image_things/elements/ShowImagesButton";

function ListingDetails() {
  const dispatch = useDispatch();

  const { listingId } = useParams();
  const user = useSelector((state) => state.session.user);
  const listing = useSelector((state) => state.listings[listingId]);
  const images = useSelector((state) => state.images);
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

  const [showBookingCard, setShowBookingCard] = useState(true);

  useEffect(() => {
    dispatch(retrieveListings());
    window.scrollTo(0, 0);
  }, [dispatch, reviews.length, images]);

  useEffect(() => {
    dispatch(retrieveReviews());
  }, [dispatch, reviews.length]);

  useEffect(() => {
    if (user && listing) {
      if (user.id === listing.user_id) {
        setShowBookingCard(false)
        let bookingCardSelector = document.getElementById("booking-card-selector");
        bookingCardSelector.classList.remove("listing-info")
        bookingCardSelector.classList.add("listing-info-no-booking-card")
      }
    }
  }, [user, listing])

  let reviewsContent;
  if (reviews.length === 1) {
    reviewsContent = " review";
  } else {
    reviewsContent = " reviews";
  }

  return (
    <main>
      {listing ? (
        <div>
          <div>
            {listing && (
              <div className="page-container">
                <div className="top-info">
                  <h1 id="title-details-page">{listing.title}</h1>
                  <div className="flex-info">
                    <h3 id="rating">⭑ {rating} </h3>
                    <h3 id="num-of-reviews">• {reviews.length}</h3>
                    <h3 id="review-word">{reviewsContent}</h3>
                    <h3 id="location-deets-page">{`  • ${listing.city}, ${listing.state}, ${listing.country}`}</h3>
                  </div>
                </div>

                {/* if there are ARE NO images */}
                {listing.images.length === 0 && (
                  <div className="no-images">
                    <h3 className="no-images-blurb">
                      There are no images for this listing
                    </h3>
                  </div>
                )}

                {/* if there ARE images */}
                {listing.images.length > 0 && (
                  <div className="image-container-main">
                    {listing.images[0] && (
                      <div className="show-all-images-container">
                        <img
                          id="image-one"
                          src={listing.images[0].url}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://images.unsplash.com/photo-1616555670626-09496d2eed9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
                          }}
                          alt={listing.title}
                        />
                        <ShowImagesButton
                          listing={listing}
                        ></ShowImagesButton>
                      </div>
                    )}
                    <div className="image-container-right">
                      {listing.images[1] && (
                        <img
                          id="image-two"
                          src={listing.images[1].url}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://images.unsplash.com/photo-1616555670626-09496d2eed9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
                          }}
                          alt={listing.title}
                        />
                      )}
                      {listing.images[2] && (
                        <img
                          id="image-three"
                          src={listing.images[2].url}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://images.unsplash.com/photo-1616555670626-09496d2eed9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
                          }}
                          alt={listing.title}
                        />
                      )}
                      {listing.images[3] && (
                        <img
                          id="image-four"
                          src={listing.images[3].url}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://images.unsplash.com/photo-1616555670626-09496d2eed9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
                          }}
                          alt={listing.title}
                        />
                      )}
                      {listing.images[4] && (
                        <img
                          id="image-five"
                          src={listing.images[4].url}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://images.unsplash.com/photo-1616555670626-09496d2eed9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60";
                          }}
                          alt={listing.title}
                        />
                      )}
                    </div>
                  </div>
                )}

                 {/* everything under the images */}
                <div id="booking-card-selector" className="listing-info">
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
                    {listing && (
                      <div className="description-section">
                        <div id="description">{listing.description}</div>
                      </div>
                    )}
                    <div className="listing-buttons-section">
                      <ListingUserButtons
                        listing={listing}
                        listingId={listingId}
                      />
                    </div>
                  </div>
                 {showBookingCard && (
                 <div className="booking-card-section">
                    <BookingCard
                      listing={listing}
                      reviews={reviews}
                      rating={rating}
                    />
                  </div>)}
                </div>
              </div>
            )}

            {/* this is the reviews section */}
            {reviews.length > 0 && (
              <div className="reviews-container">
                <div className="reviews-section-title">
                  <div id="rating-title">⭑ {rating}</div>
                  <div>
                    <div>
                      • {reviews.length} {reviewsContent}
                    </div>
                  </div>
                </div>
                <div className="all-reviews-flex">
                  {reviews.length > 0 &&
                    reviews.map((review) => {
                      return <ReviewCard key={review.id} review={review} />;
                    })}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <FourOFour />
        </div>
      )}
    </main>
  );
}

export default ListingDetails;
