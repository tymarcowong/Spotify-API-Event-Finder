import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const OpenSpotifyBtn = ({ link }) => {
  return (
    <a
      href={link}
      className="flex items-center gap-2 outline outline-2 rounded-full px-2 py-1 hover:bg-green-600"
    >
      Open Spotify <AiOutlineLink />
    </a>
  );
};

export default OpenSpotifyBtn;
