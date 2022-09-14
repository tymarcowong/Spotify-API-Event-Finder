import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Dashboard = ({ code }) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresAt, setExpiresAt] = useState();

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
      console.log(accessToken);
      if (Date.now() > expiresAt) {
        console.log("expired");
      } else {
        console.log("not yet");
      }
      axios
        .get("https://api.spotify.com/v1/me/top/tracks", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((result) => {
          console.log(result.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [accessToken]);
  return (
    <div>
      <h1>dashboard</h1>
    </div>
  );
};

export default Dashboard;
