import React, { useEffect, useState } from "react";
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

  let listings = Object.values(useSelector((state) => state.listings))

  const [aFrameBool, setAFrameBool] = useState(false);
  const [amazingPoolsBool, setAmazingPoolsBool] = useState(false);
  const [arcticBool, setArcticBool] = useState(false);
  const [beachBool, setBeachBool] = useState(false);
  const [cabinBool, setCabinBool] = useState(false);
  const [campingBool, setCampingBool] = useState(false);
  const [designBool, setDesignBool] = useState(false);
  const [islandsBool, setIslandsBool] = useState(false);
  const [lakeBool, setLakeBool] = useState(false);
  const [nationalParkBool, setNationalParkBool] = useState(false);
  const [omgBool, setOmgBool] = useState(false);
  const [tinyHomesBool, setTinyHomesBool] = useState(false);

  if (aFrameBool) {
    listings = listings.filter((listing) => listing.category === "A Frame")
  } else if (amazingPoolsBool) {
    listings = listings.filter((listing) => listing.category === "Amazing Pools")
  } else if (arcticBool) {
    listings = listings.filter((listing) => listing.category === "Arctic")
  }  else if (beachBool) {
    listings = listings.filter((listing) => listing.category === "Beach")
  } else if (cabinBool) {
    listings = listings.filter((listing) => listing.category === "Cabin")
  } else if (campingBool) {
    listings = listings.filter((listing) => listing.category === "Camping")
  } else if (designBool) {
    listings = listings.filter((listing) => listing.category === "Design")
  } else if (islandsBool) {
    listings = listings.filter((listing) => listing.category === "Islands")
  } else if (lakeBool) {
    listings = listings.filter((listing) => listing.category === "Lake")
  } else if (nationalParkBool) {
    listings = listings.filter((listing) => listing.category === "National Park")
  } else if (omgBool) {
    listings = listings.filter((listing) => listing.category === "OMG!")
  } else if (tinyHomesBool) {
    listings = listings.filter((listing) => listing.category === "Tiny Homes")
  } 

  useEffect(() => {
    dispatch(retrieveListings());
  }, [dispatch, listings.length, aFrameBool, amazingPoolsBool, arcticBool, beachBool, cabinBool, campingBool, designBool, islandsBool, lakeBool, nationalParkBool, omgBool, tinyHomesBool]);

  useEffect(() => {
    dispatch(retrieveReviews());
  }, [dispatch, reviews.length]);

  const aFrameFunc = () => {
    if (aFrameBool) {
      setAFrameBool(false)
    } else {
      setAFrameBool(true)
      setAmazingPoolsBool(false)
      setArcticBool(false)
      setBeachBool(false)
      setCabinBool(false)
      setCampingBool(false)
      setDesignBool(false)
      setIslandsBool(false)
      setLakeBool(false)
      setNationalParkBool(false)
      setOmgBool(false)
      setTinyHomesBool(false)
    }
  }

  const amazingPoolsFunc = () => {
    if (amazingPoolsBool) {
      setAmazingPoolsBool(false)
    } else {
      setAFrameBool(false)
      setAmazingPoolsBool(true)
      setArcticBool(false)
      setBeachBool(false)
      setCabinBool(false)
      setCampingBool(false)
      setDesignBool(false)
      setIslandsBool(false)
      setLakeBool(false)
      setNationalParkBool(false)
      setOmgBool(false)
      setTinyHomesBool(false)
    }
  }

  const arcticFunc = () => {
    if (arcticBool) {
      setArcticBool(false)
    } else {
      setAFrameBool(false)
      setAmazingPoolsBool(false)
      setArcticBool(true)
      setBeachBool(false)
      setCabinBool(false)
      setCampingBool(false)
      setDesignBool(false)
      setIslandsBool(false)
      setLakeBool(false)
      setNationalParkBool(false)
      setOmgBool(false)
      setTinyHomesBool(false)
    }
  }

  const beachFunc = () => {
    if (beachBool) {
      setBeachBool(false)
    } else {
      setAFrameBool(false)
      setAmazingPoolsBool(false)
      setArcticBool(false)
      setBeachBool(true)
      setCabinBool(false)
      setCampingBool(false)
      setDesignBool(false)
      setIslandsBool(false)
      setLakeBool(false)
      setNationalParkBool(false)
      setOmgBool(false)
      setTinyHomesBool(false)
    }
  }

  const cabinFunc = () => {
    if (cabinBool) {
      setCabinBool(false)
    } else {
      setAFrameBool(false)
      setAmazingPoolsBool(false)
      setArcticBool(false)
      setBeachBool(false)
      setCabinBool(true)
      setCampingBool(false)
      setDesignBool(false)
      setIslandsBool(false)
      setLakeBool(false)
      setNationalParkBool(false)
      setOmgBool(false)
      setTinyHomesBool(false)
    }
  }

  const campingFunc = () => {
    if (campingBool) {
      setCampingBool(false)
    } else {
      setAFrameBool(false)
      setAmazingPoolsBool(false)
      setArcticBool(false)
      setBeachBool(false)
      setCabinBool(false)
      setCampingBool(true)
      setDesignBool(false)
      setIslandsBool(false)
      setLakeBool(false)
      setNationalParkBool(false)
      setOmgBool(false)
      setTinyHomesBool(false)
    }
  }

  const designFunc = () => {
    if (designBool) {
      setDesignBool(false)
    } else {
      setAFrameBool(false)
      setAmazingPoolsBool(false)
      setArcticBool(false)
      setBeachBool(false)
      setCabinBool(false)
      setCampingBool(false)
      setDesignBool(true)
      setIslandsBool(false)
      setLakeBool(false)
      setNationalParkBool(false)
      setOmgBool(false)
      setTinyHomesBool(false)
    }
  }

  const islandsFunc = () => {
    if (islandsBool) {
      setIslandsBool(false)
    } else {
      setAFrameBool(false)
      setAmazingPoolsBool(false)
      setArcticBool(false)
      setBeachBool(false)
      setCabinBool(false)
      setCampingBool(false)
      setDesignBool(false)
      setIslandsBool(true)
      setLakeBool(false)
      setNationalParkBool(false)
      setOmgBool(false)
      setTinyHomesBool(false)
    }
  }

  const lakeFunc = () => {
    if (lakeBool) {
      setLakeBool(false)
    } else {
      setAFrameBool(false)
      setAmazingPoolsBool(false)
      setArcticBool(false)
      setBeachBool(false)
      setCabinBool(false)
      setCampingBool(false)
      setDesignBool(false)
      setIslandsBool(false)
      setLakeBool(true)
      setNationalParkBool(false)
      setOmgBool(false)
      setTinyHomesBool(false)
    }
  }

  const nationalParkFunc = () => {
    if (nationalParkBool) {
      setNationalParkBool(false)
    } else {
      setAFrameBool(false)
      setAmazingPoolsBool(false)
      setArcticBool(false)
      setBeachBool(false)
      setCabinBool(false)
      setCampingBool(false)
      setDesignBool(false)
      setIslandsBool(false)
      setLakeBool(false)
      setNationalParkBool(true)
      setOmgBool(false)
      setTinyHomesBool(false)
    }
  }

  const omgFunc = () => {
    if (omgBool) {
      setOmgBool(false)
    } else {
      setAFrameBool(false)
      setAmazingPoolsBool(false)
      setArcticBool(false)
      setBeachBool(false)
      setCabinBool(false)
      setCampingBool(false)
      setDesignBool(false)
      setIslandsBool(false)
      setLakeBool(false)
      setNationalParkBool(false)
      setOmgBool(true)
      setTinyHomesBool(false)
    }
  }

  const tinyHomesFunc = () => {
    if (tinyHomesBool) {
      setTinyHomesBool(false)
    } else {
      setAFrameBool(false)
      setAmazingPoolsBool(false)
      setArcticBool(false)
      setBeachBool(false)
      setCabinBool(false)
      setCampingBool(false)
      setDesignBool(false)
      setIslandsBool(false)
      setLakeBool(false)
      setNationalParkBool(false)
      setOmgBool(false)
      setTinyHomesBool(true)
    }
  }

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
        <div className="category-container">
          <div className="single-category-container">
            <button
              className="category-button"
              onClick={aFrameFunc}
            >
              <img className="category-img" src={aFrame} alt="A Frame Icon" />
              <h5 className="category-title">A Frame</h5>
            </button>
          </div>
          <div className="single-category-container">
            <button
              className="category-button"
              onClick={amazingPoolsFunc}
            >
              <img
                className="category-img"
                src={amazingPools}
                alt="Amazing Pools Icon"
              />
              <h5 className="category-title">Amazing pools</h5>
            </button>
          </div>
          <div className="single-category-container">
          <button
              className="category-button"
              onClick={arcticFunc}
            >
            <img className="category-img" src={arctic} alt="Arctic Icon" />
            <h5 className="category-title">Arctic</h5>
            </button>
          </div>
          <div className="single-category-container">
          <button
              className="category-button"
              onClick={beachFunc}
            >
            <img className="category-img" src={beach} alt="Beach Icon" />
            <h5 className="category-title">Beach</h5>
            </button>
          </div>
          <div className="single-category-container">
          <button
              className="category-button"
              onClick={cabinFunc}
            >
            <img className="category-img" src={cabin} alt="Cabin Icon" />
            <h5 className="category-title">Cabin</h5>
            </button>
          </div>
          <div className="single-category-container">
          <button
              className="category-button"
              onClick={campingFunc}
            >
            <img className="category-img" src={camping} alt="Camping Icon" />
            <h5 className="category-title">Camping</h5>
            </button>
          </div>
          <div className="single-category-container">
          <button
              className="category-button"
              onClick={designFunc}
            >
            <img className="category-img" src={design} alt="Design Icon" />
            <h5 className="category-title">Design</h5>
            </button>
          </div>
          <div className="single-category-container">
          <button
              className="category-button"
              onClick={islandsFunc}
            >
            <img className="category-img" src={islands} alt="Islands Icon" />
            <h5 className="category-title">Islands</h5>
            </button>
          </div>
          <div className="single-category-container">
          <button
              className="category-button"
              onClick={lakeFunc}
            >
            <img className="category-img" src={lake} alt="Lake Icon" />
            <h5 className="category-title">Lake</h5>
            </button>
          </div>
          <div className="single-category-container">
          <button
              className="category-button"
              onClick={nationalParkFunc}
            >
            <img
              className="category-img"
              src={nationalPark}
              alt="National Park Icon"
            />
            <h5 className="category-title">National park</h5>
            </button>
          </div>
          <div className="single-category-container">
          <button
              className="category-button"
              onClick={omgFunc}
            >
            <img className="category-img" src={omg} alt="OMG! Icon" />
            <h5 className="category-title">OMG!</h5>
            </button>
          </div>
          <div className="single-category-container">
          <button
              className="category-button"
              onClick={tinyHomesFunc}
            >
            <img
              className="category-img"
              src={tinyHome}
              alt="Tiny Homes Icon"
            />
            <h5 className="category-title">Tiny homes</h5>
            </button>
          </div>
        </div>

        {/* Listing section*/}
        {listings.length > 0 ? (
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
        ) : <h1>There are no listings in this category... yet</h1>}
      </div>
    </main>
  );
}

export default Listings;
