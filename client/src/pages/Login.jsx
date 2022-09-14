import React from "react";

const URL = "http://localhost:5000/api/login";

const Login = () => {
  return (
    <div className="login">
      <a href={URL}>login</a>
    </div>
  );
};

export default Login;
