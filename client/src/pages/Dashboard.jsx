import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";

const Dashboard = ({ code }) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresAt, setExpiresAt] = useState();

  // map data
  const [venueLat, setVenueLat] = useState(51.546708);
  const [venueLng, setVenueLng] = useState(-0.103855);

  const [artists, setArtists] = useState([]);

  const URL_SERVER = `http://${process.env.REACT_APP_URL}:5000`;

  useEffect(() => {
    const endPoint = "/api/getToken";
    axios
      .post(`${URL_SERVER}${endPoint}`, { code })
      .then((res) => {
        // remove param from url
        window.history.pushState({}, null, "/");

        setAccessToken(res.data.access_token);
        setRefreshToken(res.data.refresh_token);
        setExpiresAt(res.data.expires_at);
      })
      .catch(() => {
        window.location = "/";
      });
  }, [code]);

  useEffect(() => {
    if (accessToken) {
      const endPointArtist = "/api/topArtists";
      axios
        .post(`${URL_SERVER}${endPointArtist}`, {
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
        .get(`${URL_SERVER}${endPointArtist}${accessToken}`)
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
