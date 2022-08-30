import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveListings } from "../../store/listings";
import { retrieveReviews } from "../../store/reviews";
import { retrieveWishlists } from "../../store/wishlists";
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
  const user = useSelector((state) => state.session.user)
  const reviews = Object.values(useSelector((state) => state.reviews));
  let wishlists = Object.values(useSelector((state) => state.wishlists));
  let listings = Object.values(useSelector((state) => state.listings));

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
    listings = listings.filter((listing) => listing.category === "A Frame");
  } else if (amazingPoolsBool) {
    listings = listings.filter(
      (listing) => listing.category === "Amazing Pools"
    );
  } else if (arcticBool) {
    listings = listings.filter((listing) => listing.category === "Arctic");
  } else if (beachBool) {
    listings = listings.filter((listing) => listing.category === "Beach");
  } else if (cabinBool) {
    listings = listings.filter((listing) => listing.category === "Cabin");
  } else if (campingBool) {
    listings = listings.filter((listing) => listing.category === "Camping");
  } else if (designBool) {
    listings = listings.filter((listing) => listing.category === "Design");
  } else if (islandsBool) {
    listings = listings.filter((listing) => listing.category === "Islands");
  } else if (lakeBool) {
    listings = listings.filter((listing) => listing.category === "Lake");
  } else if (nationalParkBool) {
    listings = listings.filter(
      (listing) => listing.category === "National Park"
    );
  } else if (omgBool) {
    listings = listings.filter((listing) => listing.category === "OMG!");
  } else if (tinyHomesBool) {
    listings = listings.filter((listing) => listing.category === "Tiny Homes");
  }

  useEffect(() => {
    dispatch(retrieveListings());
  }, [
    dispatch,
    listings.length,
    aFrameBool,
    amazingPoolsBool,
    arcticBool,
    beachBool,
    cabinBool,
    campingBool,
    designBool,
    islandsBool,
    lakeBool,
    nationalParkBool,
    omgBool,
    tinyHomesBool,
  ]);

  useEffect(() => {
    dispatch(retrieveReviews());
  }, [dispatch, reviews.length]);

  useEffect(() => {
    dispatch(retrieveWishlists(user.id));
  }, [user, wishlists.length]);

  const removeSelectedButtonClasses = () => {
    let aFrameRemove = document.getElementById("a-frame-button");
    aFrameRemove.classList.remove("category-button-selected");
    let amazingPoolsRemove = document.getElementById("amazing-pools-button");
    amazingPoolsRemove.classList.remove("category-button-selected");
    let arcticRemove = document.getElementById("arctic-button");
    arcticRemove.classList.remove("category-button-selected");
    let beachRemove = document.getElementById("beach-button");
    beachRemove.classList.remove("category-button-selected");
    let cabinRemove = document.getElementById("cabin-button");
    cabinRemove.classList.remove("category-button-selected");
    let campingRemove = document.getElementById("camping-button");
    campingRemove.classList.remove("category-button-selected");
    let designRemove = document.getElementById("design-button");
    designRemove.classList.remove("category-button-selected");
    let islandsRemove = document.getElementById("islands-button");
    islandsRemove.classList.remove("category-button-selected");
    let lakeRemove = document.getElementById("lake-button");
    lakeRemove.classList.remove("category-button-selected");
    let nationalParkRemove = document.getElementById("national-park-button");
    nationalParkRemove.classList.remove("category-button-selected");
    let omgRemove = document.getElementById("omg-button");
    omgRemove.classList.remove("category-button-selected");
    let tinyHomesRemove = document.getElementById("tiny-homes-button");
    tinyHomesRemove.classList.remove("category-button-selected");
  };

  const aFrameFunc = () => {
    if (aFrameBool) {
      setAFrameBool(false);
      removeSelectedButtonClasses();
    } else {
      setAFrameBool(true);
      setAmazingPoolsBool(false);
      setArcticBool(false);
      setBeachBool(false);
      setCabinBool(false);
      setCampingBool(false);
      setDesignBool(false);
      setIslandsBool(false);
      setLakeBool(false);
      setNationalParkBool(false);
      setOmgBool(false);
      setTinyHomesBool(false);
      let aFrameAdd = document.getElementById("a-frame-button");
      aFrameAdd.classList.add("category-button-selected");
      let amazingPoolsRemove = document.getElementById("amazing-pools-button");
      amazingPoolsRemove.classList.remove("category-button-selected");
      let arcticRemove = document.getElementById("arctic-button");
      arcticRemove.classList.remove("category-button-selected");
      let beachRemove = document.getElementById("beach-button");
      beachRemove.classList.remove("category-button-selected");
      let cabinRemove = document.getElementById("cabin-button");
      cabinRemove.classList.remove("category-button-selected");
      let campingRemove = document.getElementById("camping-button");
      campingRemove.classList.remove("category-button-selected");
      let designRemove = document.getElementById("design-button");
      designRemove.classList.remove("category-button-selected");
      let islandsRemove = document.getElementById("islands-button");
      islandsRemove.classList.remove("category-button-selected");
      let lakeRemove = document.getElementById("lake-button");
      lakeRemove.classList.remove("category-button-selected");
      let nationalParkRemove = document.getElementById("national-park-button");
      nationalParkRemove.classList.remove("category-button-selected");
      let omgRemove = document.getElementById("omg-button");
      omgRemove.classList.remove("category-button-selected");
      let tinyHomesRemove = document.getElementById("tiny-homes-button");
      tinyHomesRemove.classList.remove("category-button-selected");
    }
  };

  const amazingPoolsFunc = () => {
    if (amazingPoolsBool) {
      setAmazingPoolsBool(false);
      removeSelectedButtonClasses();
    } else {
      setAFrameBool(false);
      setAmazingPoolsBool(true);
      setArcticBool(false);
      setBeachBool(false);
      setCabinBool(false);
      setCampingBool(false);
      setDesignBool(false);
      setIslandsBool(false);
      setLakeBool(false);
      setNationalParkBool(false);
      setOmgBool(false);
      setTinyHomesBool(false);
      let amazingPoolsAdd = document.getElementById("amazing-pools-button");
      amazingPoolsAdd.classList.add("category-button-selected");
      let aFrameRemove = document.getElementById("a-frame-button");
      aFrameRemove.classList.remove("category-button-selected");
      let arcticRemove = document.getElementById("arctic-button");
      arcticRemove.classList.remove("category-button-selected");
      let beachRemove = document.getElementById("beach-button");
      beachRemove.classList.remove("category-button-selected");
      let cabinRemove = document.getElementById("cabin-button");
      cabinRemove.classList.remove("category-button-selected");
      let campingRemove = document.getElementById("camping-button");
      campingRemove.classList.remove("category-button-selected");
      let designRemove = document.getElementById("design-button");
      designRemove.classList.remove("category-button-selected");
      let islandsRemove = document.getElementById("islands-button");
      islandsRemove.classList.remove("category-button-selected");
      let lakeRemove = document.getElementById("lake-button");
      lakeRemove.classList.remove("category-button-selected");
      let nationalParkRemove = document.getElementById("national-park-button");
      nationalParkRemove.classList.remove("category-button-selected");
      let omgRemove = document.getElementById("omg-button");
      omgRemove.classList.remove("category-button-selected");
      let tinyHomesRemove = document.getElementById("tiny-homes-button");
      tinyHomesRemove.classList.remove("category-button-selected");
    }
  };

  const arcticFunc = () => {
    if (arcticBool) {
      setArcticBool(false);
      removeSelectedButtonClasses();
    } else {
      setAFrameBool(false);
      setAmazingPoolsBool(false);
      setArcticBool(true);
      setBeachBool(false);
      setCabinBool(false);
      setCampingBool(false);
      setDesignBool(false);
      setIslandsBool(false);
      setLakeBool(false);
      setNationalParkBool(false);
      setOmgBool(false);
      setTinyHomesBool(false);
      let arcticAdd = document.getElementById("arctic-button");
      arcticAdd.classList.add("category-button-selected");
      let aFrameRemove = document.getElementById("a-frame-button");
      aFrameRemove.classList.remove("category-button-selected");
      let amazingPoolsRemove = document.getElementById("amazing-pools-button");
      amazingPoolsRemove.classList.remove("category-button-selected");
      let beachRemove = document.getElementById("beach-button");
      beachRemove.classList.remove("category-button-selected");
      let cabinRemove = document.getElementById("cabin-button");
      cabinRemove.classList.remove("category-button-selected");
      let campingRemove = document.getElementById("camping-button");
      campingRemove.classList.remove("category-button-selected");
      let designRemove = document.getElementById("design-button");
      designRemove.classList.remove("category-button-selected");
      let islandsRemove = document.getElementById("islands-button");
      islandsRemove.classList.remove("category-button-selected");
      let lakeRemove = document.getElementById("lake-button");
      lakeRemove.classList.remove("category-button-selected");
      let nationalParkRemove = document.getElementById("national-park-button");
      nationalParkRemove.classList.remove("category-button-selected");
      let omgRemove = document.getElementById("omg-button");
      omgRemove.classList.remove("category-button-selected");
      let tinyHomesRemove = document.getElementById("tiny-homes-button");
      tinyHomesRemove.classList.remove("category-button-selected");
    }
  };

  const beachFunc = () => {
    if (beachBool) {
      setBeachBool(false);
      removeSelectedButtonClasses();
    } else {
      setAFrameBool(false);
      setAmazingPoolsBool(false);
      setArcticBool(false);
      setBeachBool(true);
      setCabinBool(false);
      setCampingBool(false);
      setDesignBool(false);
      setIslandsBool(false);
      setLakeBool(false);
      setNationalParkBool(false);
      setOmgBool(false);
      setTinyHomesBool(false);
      let beachAdd = document.getElementById("beach-button");
      beachAdd.classList.add("category-button-selected");
      let aFrameRemove = document.getElementById("a-frame-button");
      aFrameRemove.classList.remove("category-button-selected");
      let amazingPoolsRemove = document.getElementById("amazing-pools-button");
      amazingPoolsRemove.classList.remove("category-button-selected");
      let arcticRemove = document.getElementById("arctic-button");
      arcticRemove.classList.remove("category-button-selected");
      let cabinRemove = document.getElementById("cabin-button");
      cabinRemove.classList.remove("category-button-selected");
      let campingRemove = document.getElementById("camping-button");
      campingRemove.classList.remove("category-button-selected");
      let designRemove = document.getElementById("design-button");
      designRemove.classList.remove("category-button-selected");
      let islandsRemove = document.getElementById("islands-button");
      islandsRemove.classList.remove("category-button-selected");
      let lakeRemove = document.getElementById("lake-button");
      lakeRemove.classList.remove("category-button-selected");
      let nationalParkRemove = document.getElementById("national-park-button");
      nationalParkRemove.classList.remove("category-button-selected");
      let omgRemove = document.getElementById("omg-button");
      omgRemove.classList.remove("category-button-selected");
      let tinyHomesRemove = document.getElementById("tiny-homes-button");
      tinyHomesRemove.classList.remove("category-button-selected");
    }
  };

  const cabinFunc = () => {
    if (cabinBool) {
      setCabinBool(false);
      removeSelectedButtonClasses();
    } else {
      setAFrameBool(false);
      setAmazingPoolsBool(false);
      setArcticBool(false);
      setBeachBool(false);
      setCabinBool(true);
      setCampingBool(false);
      setDesignBool(false);
      setIslandsBool(false);
      setLakeBool(false);
      setNationalParkBool(false);
      setOmgBool(false);
      setTinyHomesBool(false);
      let cabinAdd = document.getElementById("cabin-button");
      cabinAdd.classList.add("category-button-selected");
      let aFrameRemove = document.getElementById("a-frame-button");
      aFrameRemove.classList.remove("category-button-selected");
      let amazingPoolsRemove = document.getElementById("amazing-pools-button");
      amazingPoolsRemove.classList.remove("category-button-selected");
      let arcticRemove = document.getElementById("arctic-button");
      arcticRemove.classList.remove("category-button-selected");
      let beachRemove = document.getElementById("beach-button");
      beachRemove.classList.remove("category-button-selected");
      let campingRemove = document.getElementById("camping-button");
      campingRemove.classList.remove("category-button-selected");
      let designRemove = document.getElementById("design-button");
      designRemove.classList.remove("category-button-selected");
      let islandsRemove = document.getElementById("islands-button");
      islandsRemove.classList.remove("category-button-selected");
      let lakeRemove = document.getElementById("lake-button");
      lakeRemove.classList.remove("category-button-selected");
      let nationalParkRemove = document.getElementById("national-park-button");
      nationalParkRemove.classList.remove("category-button-selected");
      let omgRemove = document.getElementById("omg-button");
      omgRemove.classList.remove("category-button-selected");
      let tinyHomesRemove = document.getElementById("tiny-homes-button");
      tinyHomesRemove.classList.remove("category-button-selected");
    }
  };

  const campingFunc = () => {
    if (campingBool) {
      setCampingBool(false);
      removeSelectedButtonClasses();
    } else {
      setAFrameBool(false);
      setAmazingPoolsBool(false);
      setArcticBool(false);
      setBeachBool(false);
      setCabinBool(false);
      setCampingBool(true);
      setDesignBool(false);
      setIslandsBool(false);
      setLakeBool(false);
      setNationalParkBool(false);
      setOmgBool(false);
      setTinyHomesBool(false);
      let campingAdd = document.getElementById("camping-button");
      campingAdd.classList.add("category-button-selected");
      let aFrameRemove = document.getElementById("a-frame-button");
      aFrameRemove.classList.remove("category-button-selected");
      let amazingPoolsRemove = document.getElementById("amazing-pools-button");
      amazingPoolsRemove.classList.remove("category-button-selected");
      let arcticRemove = document.getElementById("arctic-button");
      arcticRemove.classList.remove("category-button-selected");
      let beachRemove = document.getElementById("beach-button");
      beachRemove.classList.remove("category-button-selected");
      let cabinRemove = document.getElementById("cabin-button");
      cabinRemove.classList.remove("category-button-selected");
      let designRemove = document.getElementById("design-button");
      designRemove.classList.remove("category-button-selected");
      let islandsRemove = document.getElementById("islands-button");
      islandsRemove.classList.remove("category-button-selected");
      let lakeRemove = document.getElementById("lake-button");
      lakeRemove.classList.remove("category-button-selected");
      let nationalParkRemove = document.getElementById("national-park-button");
      nationalParkRemove.classList.remove("category-button-selected");
      let omgRemove = document.getElementById("omg-button");
      omgRemove.classList.remove("category-button-selected");
      let tinyHomesRemove = document.getElementById("tiny-homes-button");
      tinyHomesRemove.classList.remove("category-button-selected");
    }
  };

  const designFunc = () => {
    if (designBool) {
      setDesignBool(false);
      removeSelectedButtonClasses();
    } else {
      setAFrameBool(false);
      setAmazingPoolsBool(false);
      setArcticBool(false);
      setBeachBool(false);
      setCabinBool(false);
      setCampingBool(false);
      setDesignBool(true);
      setIslandsBool(false);
      setLakeBool(false);
      setNationalParkBool(false);
      setOmgBool(false);
      setTinyHomesBool(false);
      let designAdd = document.getElementById("design-button");
      designAdd.classList.add("category-button-selected");
      let aFrameRemove = document.getElementById("a-frame-button");
      aFrameRemove.classList.remove("category-button-selected");
      let amazingPoolsRemove = document.getElementById("amazing-pools-button");
      amazingPoolsRemove.classList.remove("category-button-selected");
      let arcticRemove = document.getElementById("arctic-button");
      arcticRemove.classList.remove("category-button-selected");
      let beachRemove = document.getElementById("beach-button");
      beachRemove.classList.remove("category-button-selected");
      let cabinRemove = document.getElementById("cabin-button");
      cabinRemove.classList.remove("category-button-selected");
      let campingRemove = document.getElementById("camping-button");
      campingRemove.classList.remove("category-button-selected");
      let islandsRemove = document.getElementById("islands-button");
      islandsRemove.classList.remove("category-button-selected");
      let lakeRemove = document.getElementById("lake-button");
      lakeRemove.classList.remove("category-button-selected");
      let nationalParkRemove = document.getElementById("national-park-button");
      nationalParkRemove.classList.remove("category-button-selected");
      let omgRemove = document.getElementById("omg-button");
      omgRemove.classList.remove("category-button-selected");
      let tinyHomesRemove = document.getElementById("tiny-homes-button");
      tinyHomesRemove.classList.remove("category-button-selected");
    }
  };

  const islandsFunc = () => {
    if (islandsBool) {
      setIslandsBool(false);
      removeSelectedButtonClasses();
    } else {
      setAFrameBool(false);
      setAmazingPoolsBool(false);
      setArcticBool(false);
      setBeachBool(false);
      setCabinBool(false);
      setCampingBool(false);
      setDesignBool(false);
      setIslandsBool(true);
      setLakeBool(false);
      setNationalParkBool(false);
      setOmgBool(false);
      setTinyHomesBool(false);
      let islandsAdd = document.getElementById("islands-button");
      islandsAdd.classList.add("category-button-selected");
      let aFrameRemove = document.getElementById("a-frame-button");
      aFrameRemove.classList.remove("category-button-selected");
      let amazingPoolsRemove = document.getElementById("amazing-pools-button");
      amazingPoolsRemove.classList.remove("category-button-selected");
      let arcticRemove = document.getElementById("arctic-button");
      arcticRemove.classList.remove("category-button-selected");
      let beachRemove = document.getElementById("beach-button");
      beachRemove.classList.remove("category-button-selected");
      let cabinRemove = document.getElementById("cabin-button");
      cabinRemove.classList.remove("category-button-selected");
      let campingRemove = document.getElementById("camping-button");
      campingRemove.classList.remove("category-button-selected");
      let designRemove = document.getElementById("design-button");
      designRemove.classList.remove("category-button-selected");
      let lakeRemove = document.getElementById("lake-button");
      lakeRemove.classList.remove("category-button-selected");
      let nationalParkRemove = document.getElementById("national-park-button");
      nationalParkRemove.classList.remove("category-button-selected");
      let omgRemove = document.getElementById("omg-button");
      omgRemove.classList.remove("category-button-selected");
      let tinyHomesRemove = document.getElementById("tiny-homes-button");
      tinyHomesRemove.classList.remove("category-button-selected");
    }
  };

  const lakeFunc = () => {
    if (lakeBool) {
      setLakeBool(false);
      removeSelectedButtonClasses();
    } else {
      setAFrameBool(false);
      setAmazingPoolsBool(false);
      setArcticBool(false);
      setBeachBool(false);
      setCabinBool(false);
      setCampingBool(false);
      setDesignBool(false);
      setIslandsBool(false);
      setLakeBool(true);
      setNationalParkBool(false);
      setOmgBool(false);
      setTinyHomesBool(false);
      let lakeAdd = document.getElementById("lake-button");
      lakeAdd.classList.add("category-button-selected");
      let aFrameRemove = document.getElementById("a-frame-button");
      aFrameRemove.classList.remove("category-button-selected");
      let amazingPoolsRemove = document.getElementById("amazing-pools-button");
      amazingPoolsRemove.classList.remove("category-button-selected");
      let arcticRemove = document.getElementById("arctic-button");
      arcticRemove.classList.remove("category-button-selected");
      let beachRemove = document.getElementById("beach-button");
      beachRemove.classList.remove("category-button-selected");
      let cabinRemove = document.getElementById("cabin-button");
      cabinRemove.classList.remove("category-button-selected");
      let campingRemove = document.getElementById("camping-button");
      campingRemove.classList.remove("category-button-selected");
      let designRemove = document.getElementById("design-button");
      designRemove.classList.remove("category-button-selected");
      let islandsRemove = document.getElementById("islands-button");
      islandsRemove.classList.remove("category-button-selected");
      let nationalParkRemove = document.getElementById("national-park-button");
      nationalParkRemove.classList.remove("category-button-selected");
      let omgRemove = document.getElementById("omg-button");
      omgRemove.classList.remove("category-button-selected");
      let tinyHomesRemove = document.getElementById("tiny-homes-button");
      tinyHomesRemove.classList.remove("category-button-selected");
    }
  };

  const nationalParkFunc = () => {
    if (nationalParkBool) {
      setNationalParkBool(false);
      removeSelectedButtonClasses();
    } else {
      setAFrameBool(false);
      setAmazingPoolsBool(false);
      setArcticBool(false);
      setBeachBool(false);
      setCabinBool(false);
      setCampingBool(false);
      setDesignBool(false);
      setIslandsBool(false);
      setLakeBool(false);
      setNationalParkBool(true);
      setOmgBool(false);
      setTinyHomesBool(false);
      let nationalParkAdd = document.getElementById("national-park-button");
      nationalParkAdd.classList.add("category-button-selected");
      let aFrameRemove = document.getElementById("a-frame-button");
      aFrameRemove.classList.remove("category-button-selected");
      let amazingPoolsRemove = document.getElementById("amazing-pools-button");
      amazingPoolsRemove.classList.remove("category-button-selected");
      let arcticRemove = document.getElementById("arctic-button");
      arcticRemove.classList.remove("category-button-selected");
      let beachRemove = document.getElementById("beach-button");
      beachRemove.classList.remove("category-button-selected");
      let cabinRemove = document.getElementById("cabin-button");
      cabinRemove.classList.remove("category-button-selected");
      let campingRemove = document.getElementById("camping-button");
      campingRemove.classList.remove("category-button-selected");
      let designRemove = document.getElementById("design-button");
      designRemove.classList.remove("category-button-selected");
      let islandsRemove = document.getElementById("islands-button");
      islandsRemove.classList.remove("category-button-selected");
      let lakeRemove = document.getElementById("lake-button");
      lakeRemove.classList.remove("category-button-selected");
      let omgRemove = document.getElementById("omg-button");
      omgRemove.classList.remove("category-button-selected");
      let tinyHomesRemove = document.getElementById("tiny-homes-button");
      tinyHomesRemove.classList.remove("category-button-selected");
    }
  };

  const omgFunc = () => {
    if (omgBool) {
      setOmgBool(false);
      removeSelectedButtonClasses();
    } else {
      setAFrameBool(false);
      setAmazingPoolsBool(false);
      setArcticBool(false);
      setBeachBool(false);
      setCabinBool(false);
      setCampingBool(false);
      setDesignBool(false);
      setIslandsBool(false);
      setLakeBool(false);
      setNationalParkBool(false);
      setOmgBool(true);
      setTinyHomesBool(false);
      let omgAdd = document.getElementById("omg-button");
      omgAdd.classList.add("category-button-selected");
      let aFrameRemove = document.getElementById("a-frame-button");
      aFrameRemove.classList.remove("category-button-selected");
      let amazingPoolsRemove = document.getElementById("amazing-pools-button");
      amazingPoolsRemove.classList.remove("category-button-selected");
      let arcticRemove = document.getElementById("arctic-button");
      arcticRemove.classList.remove("category-button-selected");
      let beachRemove = document.getElementById("beach-button");
      beachRemove.classList.remove("category-button-selected");
      let cabinRemove = document.getElementById("cabin-button");
      cabinRemove.classList.remove("category-button-selected");
      let campingRemove = document.getElementById("camping-button");
      campingRemove.classList.remove("category-button-selected");
      let designRemove = document.getElementById("design-button");
      designRemove.classList.remove("category-button-selected");
      let islandsRemove = document.getElementById("islands-button");
      islandsRemove.classList.remove("category-button-selected");
      let lakeRemove = document.getElementById("lake-button");
      lakeRemove.classList.remove("category-button-selected");
      let nationalParkRemove = document.getElementById("national-park-button");
      nationalParkRemove.classList.remove("category-button-selected");
      let tinyHomesRemove = document.getElementById("tiny-homes-button");
      tinyHomesRemove.classList.remove("category-button-selected");
    }
  };

  const tinyHomesFunc = () => {
    if (tinyHomesBool) {
      setTinyHomesBool(false);
      removeSelectedButtonClasses();
    } else {
      setAFrameBool(false);
      setAmazingPoolsBool(false);
      setArcticBool(false);
      setBeachBool(false);
      setCabinBool(false);
      setCampingBool(false);
      setDesignBool(false);
      setIslandsBool(false);
      setLakeBool(false);
      setNationalParkBool(false);
      setOmgBool(false);
      setTinyHomesBool(true);
      let tinyHomesAdd = document.getElementById("tiny-homes-button");
      tinyHomesAdd.classList.add("category-button-selected");
      let aFrameRemove = document.getElementById("a-frame-button");
      aFrameRemove.classList.remove("category-button-selected");
      let amazingPoolsRemove = document.getElementById("amazing-pools-button");
      amazingPoolsRemove.classList.remove("category-button-selected");
      let arcticRemove = document.getElementById("arctic-button");
      arcticRemove.classList.remove("category-button-selected");
      let beachRemove = document.getElementById("beach-button");
      beachRemove.classList.remove("category-button-selected");
      let cabinRemove = document.getElementById("cabin-button");
      cabinRemove.classList.remove("category-button-selected");
      let campingRemove = document.getElementById("camping-button");
      campingRemove.classList.remove("category-button-selected");
      let designRemove = document.getElementById("design-button");
      designRemove.classList.remove("category-button-selected");
      let islandsRemove = document.getElementById("islands-button");
      islandsRemove.classList.remove("category-button-selected");
      let lakeRemove = document.getElementById("lake-button");
      lakeRemove.classList.remove("category-button-selected");
      let nationalParkRemove = document.getElementById("national-park-button");
      nationalParkRemove.classList.remove("category-button-selected");
      let omgRemove = document.getElementById("omg-button");
      omgRemove.classList.remove("category-button-selected");
    }
  };

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
                listing details and the ability to book a stay there. Feel free
                to log in and create a listing for other users to view, review
                and book! You will be able to add images to your listing, update
                your listing and, if desired, delete your listing. Checkout the
                top right corner of the page to get started!
              </h3>
            </div>
          </div>
        </div>

        {/* Category section */}
        <div className="category-container">
          <div className="single-category-container">
            <button
              id="a-frame-button"
              className="category-button"
              onClick={aFrameFunc}
            >
              <img className="category-img" src={aFrame} alt="A Frame Icon" />
              <h5 className="category-title">A Frame</h5>
            </button>
          </div>
          <div className="single-category-container">
            <button
              id="amazing-pools-button"
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
              id="arctic-button"
              className="category-button"
              onClick={arcticFunc}
            >
              <img className="category-img" src={arctic} alt="Arctic Icon" />
              <h5 className="category-title">Arctic</h5>
            </button>
          </div>
          <div className="single-category-container">
            <button
              id="beach-button"
              className="category-button"
              onClick={beachFunc}
            >
              <img className="category-img" src={beach} alt="Beach Icon" />
              <h5 className="category-title">Beach</h5>
            </button>
          </div>
          <div className="single-category-container">
            <button
              id="cabin-button"
              className="category-button"
              onClick={cabinFunc}
            >
              <img className="category-img" src={cabin} alt="Cabin Icon" />
              <h5 className="category-title">Cabin</h5>
            </button>
          </div>
          <div className="single-category-container">
            <button
              id="camping-button"
              className="category-button"
              onClick={campingFunc}
            >
              <img className="category-img" src={camping} alt="Camping Icon" />
              <h5 className="category-title">Camping</h5>
            </button>
          </div>
          <div className="single-category-container">
            <button
              id="design-button"
              className="category-button"
              onClick={designFunc}
            >
              <img className="category-img" src={design} alt="Design Icon" />
              <h5 className="category-title">Design</h5>
            </button>
          </div>
          <div className="single-category-container">
            <button
              id="islands-button"
              className="category-button"
              onClick={islandsFunc}
            >
              <img className="category-img" src={islands} alt="Islands Icon" />
              <h5 className="category-title">Islands</h5>
            </button>
          </div>
          <div className="single-category-container">
            <button
              id="lake-button"
              className="category-button"
              onClick={lakeFunc}
            >
              <img className="category-img" src={lake} alt="Lake Icon" />
              <h5 className="category-title">Lake</h5>
            </button>
          </div>
          <div className="single-category-container">
            <button
              id="national-park-button"
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
              id="omg-button"
              className="category-button"
              onClick={omgFunc}
            >
              <img className="category-img" src={omg} alt="OMG! Icon" />
              <h5 className="category-title">OMG!</h5>
            </button>
          </div>
          <div className="single-category-container">
            <button
              id="tiny-homes-button"
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
                  user={user}
                  wishlists={wishlists}
                />
              );
            })}
          </div>
        ) : (
          <h1 id="filtered-no-listings">
            There are no listings in this category... yet
          </h1>
        )}
      </div>
    </main>
  );
}

export default Listings;
