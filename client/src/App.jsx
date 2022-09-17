import React, { useEffect, useState } from "react";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import {
  getExpiresAt,
  getTokenFromLS,
  storeExpiresAt,
  storeTokenToLS,
  tokenExpired,
} from "./utils";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (getTokenFromLS() !== null && !tokenExpired()) {
      setLoggedIn(true);
      return;
    }
    const params = new URLSearchParams(window.location.search);

    const accessToken = params.get("access_token");
    const expiresAt = params.get("expires_at");

    if (accessToken) {
      storeTokenToLS(accessToken);
      storeExpiresAt(expiresAt);

      window.history.pushState({}, null, "/");

      setLoggedIn(true);
    }
  }, []);

  // change to if no accesstoken
  return <>{loggedIn ? <Dashboard /> : <Login />}</>;
};

export default App;
