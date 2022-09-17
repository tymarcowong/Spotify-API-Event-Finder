import React from "react";

const LOGIN_URL = `http://${process.env.REACT_APP_URL}:5000/api/login`;

const Login = () => {
  return (
    <div className="w-screen h-screen bg-black flex content-center items-center justify-center">
      <a
        href={LOGIN_URL}
        className="text-white bg-green-500 inline text-4xl px-16 py-4 rounded-full"
      >
        Login
      </a>
    </div>
  );
};

export default Login;
