import React, { useState, useEffect } from "react";
import axios from "axios";

import { getEndpointUrl, getTokenFromLS } from "../utils";

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
      <ul>
        {artists.map((artist) => {
          return (
            <li key={artist.id}>
              {artist.name} <img src={artist.image} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TopArtists;
