import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveListings } from "../../store/listings";
import { retrieveReviews } from "../../store/reviews";
import ListingCard from "../listings/Elements/ListingCard";
import aFrame from "../../images/categories/aFrame.jpeg";
import amazingPools from "../../images/categories/amazingPools.jpeg";
import arctic from "../../images/categories/arctic.jpeg";
import beach from "../../images/categories/beach.jpeg";
import cabin from "../../images/categories/cabin.jpeg";
import camping from "../../images/categories/camping.jpeg";
import design from "../../images/categories/design.jpeg";
import islands from "../../images/categories/islands.jpeg";
import lake from "../../images/categories/lake.jpeg";
import nationalPark from "../../images/categories/nationalPark.jpeg";
import omg from "../../images/categories/omg.jpeg";
import tinyHome from "../../images/categories/tinyHome.jpeg";
import "./listings.css";

function Listings() {
  const dispatch = useDispatch();
  const reviews = Object.values(useSelector((state) => state.reviews));
  const listings = Object.values(useSelector((state) => state.listings));

  useEffect(() => {
    dispatch(retrieveListings());
  }, [dispatch, listings.length]);

  useEffect(() => {
    dispatch(retrieveReviews());
  }, [dispatch, reviews.length]);

  return (
    <main>
      <div>
        {/* Splash section */}
        <div className="splash-image">
          <div className="welcome-container">
            <div className="welcome">
              <span id="site-welcome">Welcome to Urbnb!</span>
              <h3>
                Scroll down to checkout all listings, click on a listing for the
                listing details. Feel free to log in and create a listing for
                other users to view! You will be able to add images to your
                listing, update your listing and, if desired, delete your
                listing. A logged in user can leave a review and rating for any
                listing. Checkout the top right corner of the page to get
                started!
              </h3>
            </div>
          </div>
        </div>

        {/* Category section */}
        <div>
          <div>
            <img src={aFrame} alt="A Frame Icon" />
            <h5>A Frame</h5>
          </div>
          <div>
            <img src={amazingPools} alt="Amazing Pools Icon" />
            <h5>Amazing pools</h5>
          </div>
          <div>
            <img src={arctic} alt="Arctic Icon" />
            <h5>Arctic</h5>
          </div>
          <div>
            <img src={beach} alt="Beach Icon" />
            <h5>Beach</h5>
          </div>
          <div>
            <img src={cabin} alt="Cabin Icon" />
            <h5>Cabin</h5>
          </div>
          <div>
            <img src={camping} alt="Camping Icon" />
            <h5>Camping</h5>
          </div>
          <div>
            <img src={design} alt="Design Icon" />
            <h5>Design</h5>
          </div>
          <div>
            <img src={islands} alt="Islands Icon" />
            <h5>Islands</h5>
          </div>
          <div>
            <img src={lake} alt="Lake Icon" />
            <h5>Lake</h5>
          </div>
          <div>
            <img src={nationalPark} alt="National Park Icon" />
            <h5>National park</h5>
          </div>
          <div>
            <img src={omg} alt="OMG! Icon" />
            <h5>OMG!</h5>
          </div>
          <div>
            <img src={tinyHome} alt="Tiny Homes Icon" />
            <h5>Tiny homes</h5>
          </div>
        </div>

        {/* Listing section */}
        {listings.length > 0 && (
          <div className="listing-container">
            {listings.map((listing) => {
              return (
                <ListingCard
                  key={listing.id}
                  reviews={reviews}
                  listing={listing}
                />
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

export default Listings;
