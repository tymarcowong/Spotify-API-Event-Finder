import React, { useState, useEffect } from "react";
import axios from "axios";

import { getEndpointUrl, getTokenFromLS } from "../utils";
import ArtistEventCard from "../components/ArtistEventCard";
import NoArtists from "../components/NoArtists";

const TopArtists = () => {
  const [artists, setArtists] = useState([]);

  const test = [
    {
      spotifyUrl: "https://open.spotify.com/artist/2elBjNSdBE2Y3f0j1mjrql",
      followers: 3535182,
      image: "https://i.scdn.co/image/ab6761610000e5eb02b3aa55ba238b2ceafb09da",
      name: "Jay Chou",
      id: "2elBjNSdBE2Y3f0j1mjrql",
    },
    {
      spotifyUrl: "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
      followers: 54476604,
      image: "https://i.scdn.co/image/ab6761610000e5eb5704a64f34fe29ff73ab56bb",
      name: "BTS",
      id: "3Nrfpe0tUJi4K4DXYWgMUX",
    },
    {
      spotifyUrl: "https://open.spotify.com/artist/1snhtMLeb2DYoMOcVbb8iB",
      followers: 4089354,
      image: "https://i.scdn.co/image/ab6761610000e5eb248144419d84f33bf00d6863",
      name: "Kenshi Yonezu",
      id: "1snhtMLeb2DYoMOcVbb8iB",
    },
    {
      spotifyUrl: "https://open.spotify.com/artist/0bAsR2unSRpn6BQPEnNlZm",
      followers: 1965686,
      image: "https://i.scdn.co/image/ab6761610000e5eb1271824e2acc640a35c70397",
      name: "Aimer",
      id: "0bAsR2unSRpn6BQPEnNlZm",
    },
    {
      spotifyUrl: "https://open.spotify.com/artist/2MVfNjocvNrE03cQuxpsWK",
      followers: 334848,
      image: "https://i.scdn.co/image/ab6761610000e5eb180896fe56d6b2c43360e4ef",
      name: "Hins Cheung",
      id: "2MVfNjocvNrE03cQuxpsWK",
    },
  ];

  useEffect(() => {
    setArtists(test);

    // const url = getEndpointUrl("/api/findEvents");
    // const token = getTokenFromLS();
    // const query = `?accessToken=${token}`;
    // axios.get(url + query).then((res) => {
    //   console.log(res.data);
    //   setArtists(res.data);
    // });
  }, []);

  return (
    <section>
      {artists.length === 0 ? (
        <NoArtists />
      ) : (
        <ul className="flex justify-center pt-10">
          {artists.map((artist) => (
            <ArtistEventCard key={artist.id} artist={artist} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default TopArtists;
