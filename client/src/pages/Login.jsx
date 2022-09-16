import React from "react";

const URL_LOGIN = `${process.env.REACT_APP_SERVER_URL}/api/login`;

const Login = () => {
  return (
    <div className="login">
      <a href={URL_LOGIN}>login</a>
    </div>
  );
};

export default Login;
