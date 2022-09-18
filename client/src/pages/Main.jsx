import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";
import { getEndpointUrl, getTokenFromLS, logout } from "../utils";
import Header from "../components/Header";
import TopArtists from "../container/TopArtists";
import Profile from "../components/Profile";

const Main = () => {
  // map data
  const [venueLat, setVenueLat] = useState(0);
  const [venueLng, setVenueLng] = useState(0);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Profile />
      <div className="bg-green-500">Find events for you</div>
      <p>Find events based on your favourtite artists!</p>
      <TopArtists />
    </div>
  );
};

export default Main;
