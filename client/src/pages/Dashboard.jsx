import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Dashboard = ({ code }) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresAt, setExpiresAt] = useState();

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
      if (Date.now() > expiresAt) {
        console.log("expired");
      } else {
        console.log("not yet");
      }
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
    }
    axios
      .get("http://localhost:5000/api/findEvents")
      .then((result) => {
        console.log(result.data._embedded.events);
        console.log("=============");
        const data = result.data._embedded.events[0];

        return {
          id: data.id,
          dates: data.dates,
          images: data.images,
          name: data.name,
          url: data.url,
          venue: data._embedded,
        };
      })
      .then((event) => console.log(event))
      .catch((e) => {
        console.log(e);
      });
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
    </div>
  );
};

export default Dashboard;
