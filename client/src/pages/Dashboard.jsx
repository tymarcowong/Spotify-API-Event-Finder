import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";
import { getTokenFromLS, logout } from "../utils";
import Header from "../components/Header";
import TopArtists from "../container/TopArtists";

const Dashboard = () => {
  // map data
  const [venueLat, setVenueLat] = useState(0);
  const [venueLng, setVenueLng] = useState(0);

  const [artists, setArtists] = useState([]);

  const SERVER_URL = `http://${process.env.REACT_APP_URL}:5000`;

  const accessToken = getTokenFromLS();

  useEffect(() => {
    if (accessToken) {
      const endPointArtist = "/api/topArtists";
      axios
        .post(`${SERVER_URL}${endPointArtist}`, {
          accessToken,
        })
        .then((result) => {
          setArtists(result.data);
        })
        .catch((e) => {
          console.log("error");
        });
    }
  }, []);

  return (
    <div className="bg-black text-white">
      <Header />
      <TopArtists artists={artists} />
      <Map lat={venueLat} lng={venueLng} />
    </div>
  );
};

export default Dashboard;
