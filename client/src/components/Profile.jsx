import React, { useState, useEffect } from "react";
import axios from "axios";
import { getEndpointUrl, getTokenFromLS } from "../utils";
import { AiOutlineLink } from "react-icons/ai";
import Loading from "./Loading";
import OpenSpotifyBtn from "./OpenSpotifyBtn";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);

  const testing = {
    image:
      "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=405828062941525&height=300&width=300&ext=1666060767&hash=AeR3Iu1ghO6rcO8yOH8",
    followers: 41,
    spotifyUrl: "https://open.spotify.com/user/22ki4m2iltlnq5skyddp4badi",
    name: "Wong Marco",
    country: "HK",
  };

  useEffect(() => {
    setProfile(testing);

    // setLoading(true);
    // const url = getEndpointUrl("/api/profile");
    // const token = getTokenFromLS();
    // const query = `?accessToken=${token}`;
    // axios.get(url + query).then((res) => {
    //   setProfile(res.data);
    //   setLoading(false);
    // });
  }, []);

  return (
    <section className="flex flex-col justify-center items-center gap-4 h-96">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="w-40 h-40">
            <img
              src={profile.image}
              alt={`Image of ${profile.name}`}
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl">{profile.name}</h2>
          <p className="text-gray-500">
            Country/ Region: {profile.country} | Followers: {profile.followers}
          </p>
          <OpenSpotifyBtn link={profile.spotifyUrl} />
        </>
      )}
    </section>
  );
};

export default Profile;
