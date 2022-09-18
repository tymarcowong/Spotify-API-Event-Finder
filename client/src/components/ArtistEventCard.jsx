import React from "react";
import OpenSpotifyBtn from "./OpenSpotifyBtn";

const ArtistEventCard = ({ artist }) => {
  // {
  //   spotifyUrl: "https://open.spotify.com/artist/2elBjNSdBE2Y3f0j1mjrql",
  //   followers: 3535182,
  //   image: "https://i.scdn.co/image/ab6761610000e5eb02b3aa55ba238b2ceafb09da",
  //   name: "Jay Chou",
  //   id: "2elBjNSdBE2Y3f0j1mjrql",
  // },
  return (
    <li className="flex flex-col w-2/12 items-center horizontal-card-border gap-6">
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
