import React from "react";
import OpenSpotifyBtn from "./OpenSpotifyBtn";

const ArtistEventCard = ({ artist }) => {
  return (
    <li className="flex flex-col w-3/12 items-center horizontal-card-border gap-6">
      <h3 className="text-2xl mt-4">{artist.name}</h3>
      <div className="w-48 ">
        <img
          src={artist.image}
          alt={`Image of ${artist.name}`}
          className="rounded-full"
        />
      </div>
      <p className="text-gray-500">Followers: {artist.followers}</p>
      <OpenSpotifyBtn link={artist.spotifyUrl} />
    </li>
  );
};

export default ArtistEventCard;
