import React, { useEffect, useState } from "react";
import "./App.css";

import Main from "./pages/Main";
import Login from "./pages/Login";

import {
  getExpiresAt,
  getTokenFromLS,
  logout,
  removeExpiresAt,
  removeToken,
  storeExpiresAt,
  storeTokenToLS,
  tokenExpired,
} from "./utils";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Open dashboard if a valid token is found
    if (getTokenFromLS() !== null && !tokenExpired()) {
      setLoggedIn(true);
      return;
    }

    removeExpiresAt();
    removeToken();

    // Read params from URL provided by backend.
    // No params can be read if it was not redirected from backend.
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

  return <>{true ? <Main /> : <Login />}</>;
  // return <>{loggedIn ? <Main /> : <Login />}</>;
};

export default App;
