import React from "react";

const URL_LOGIN = `${process.env.REACT_APP_SERVER_URL}/api/login`;

const Login = () => {
  return (
    <div className="w-screen h-screen bg-black flex content-center items-center justify-center">
      <a
        href={URL_LOGIN}
        className="text-white bg-green-500 inline text-4xl px-16 py-4 rounded-full font-bold"
      >
        Login
      </a>
    </div>
  );
};

export default Login;
