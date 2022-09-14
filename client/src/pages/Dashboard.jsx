import React from "react";
import { useEffect } from "react";
import axios from "axios";

const Dashboard = ({ code }) => {
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/getToken", { code })
      .then((res) => console.log(res));
  }, [code]);
  return (
    <div>
      <h1>dashboard</h1>
      {code}
    </div>
  );
};

export default Dashboard;
