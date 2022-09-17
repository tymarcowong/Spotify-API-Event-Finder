import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";
import { getTokenFromLS } from "../utils";

const Dashboard = () => {
  // map data
  const [venueLat, setVenueLat] = useState(51.546708);
  const [venueLng, setVenueLng] = useState(-0.103855);

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
          console.log(e);
        });

      const endPointEvents = `/api/findEvents?accessToken=${accessToken}`;
      const queryEvents = `?accessToken=${accessToken}`;
      axios
        .get(`${SERVER_URL}${endPointArtist}${accessToken}`)
        .then((res) => {
          return res.data;
        })
        .then((events) => {
          const coords = events.location.coords;
          const lat = coords.lat;
          const lng = coords.lng;
          setVenueLat(lat);
          setVenueLng(lng);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [accessToken]);

  return (
    <div>
      <h1 class="text-4xl">dashboard</h1>
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
