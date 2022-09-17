import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";
import { getTokenFromLS, logout } from "../utils";
import Header from "../components/Header";

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
      <ul>
        {artists.map((artist) => {
          return (
            <li key={artist.id}>
              {artist.name} <img src={artist.image} />
            </li>
          );
        })}
      </ul>
      <Map lat={venueLat} lng={venueLng} />
    </div>
  );
};

export default Dashboard;
