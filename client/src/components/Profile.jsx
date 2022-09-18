import React, { useState, useEffect } from "react";
import axios from "axios";
import { getEndpointUrl, getTokenFromLS } from "../utils";
import { AiOutlineLink } from "react-icons/ai";

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const url = getEndpointUrl("/api/profile");
    const token = getTokenFromLS();
    const query = `?accessToken=${token}`;
    axios.get(url + query).then((res) => {
      setProfile(res.data);
    });
  }, []);

  return (
    <section className="flex flex-col items-center gap-4 py-24">
      <img
        src={profile.image}
        alt={`Image of ${profile.name}`}
        className="w-40 rounded-full"
      />
      <h2 className="text-2xl">{profile.name}</h2>
      <p className="text-gray-500">
        Country/ Region: {profile.country} | Followers: {profile.followers}
      </p>
      <a
        href={profile.spotifyUrl}
        className="flex items-center gap-2 outline outline-2 rounded-full px-2 py-1 hover:bg-green-600"
      >
        Open Spotify <AiOutlineLink />
      </a>
    </section>
  );
};

export default Profile;
