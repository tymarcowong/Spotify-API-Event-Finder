import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Map from "../components/Map";

const Dashboard = ({ code }) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresAt, setExpiresAt] = useState();

  // map
  const [venueLat, setVenueLat] = useState(51.546708);
  const [venueLng, setVenueLng] = useState(-0.103855);

  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/getToken", { code })
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
      axios
        .post("http://localhost:5000/api/topArtists", {
          accessToken,
        })
        .then((result) => {
          setArtists(result.data);
        })
        .catch((e) => {
          console.log(e);
        });

      axios
        .get(`http://localhost:5000/api/findEvents?accessToken=${accessToken}`)
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
      <h1>dashboard</h1>
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
