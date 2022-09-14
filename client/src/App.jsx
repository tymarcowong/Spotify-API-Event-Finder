import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const App = () => {
  const code = new URLSearchParams(window.location.search).get("code");

  return <>{code ? <Dashboard code={code} /> : <Login />}</>;
};

export default App;
