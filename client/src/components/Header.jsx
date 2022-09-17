import React from "react";
import { logout } from "../utils";

const Header = () => {
  return (
    <header className="flex justify-between px-8 py-4 items-center">
      <h1 className="text-4xl">dashboard</h1>
      <button
        onClick={() => logout()}
        className="bg-green-500 px-4 py-2 rounded-full"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
