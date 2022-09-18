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
      spotifyUrl: "https://open.spotify.com/artist/2elBjNSdBE2Y3f0j1mjrql",
      followers: 3535182,
      image: "https://i.scdn.co/image/ab6761610000e5eb02b3aa55ba238b2ceafb09da",
      name: "Jay Chou",
      id: "2",
    },
    {
      spotifyUrl: "https://open.spotify.com/artist/2elBjNSdBE2Y3f0j1mjrql",
      followers: 3535182,
      image: "https://i.scdn.co/image/ab6761610000e5eb02b3aa55ba238b2ceafb09da",
      name: "Jay Chou",
      id: "1",
    },
    {
      spotifyUrl: "https://open.spotify.com/artist/2elBjNSdBE2Y3f0j1mjrql",
      followers: 3535182,
      image: "https://i.scdn.co/image/ab6761610000e5eb02b3aa55ba238b2ceafb09da",
      name: "Jay Chou",
      id: "4",
    },
    {
      spotifyUrl: "https://open.spotify.com/artist/2elBjNSdBE2Y3f0j1mjrql",
      followers: 3535182,
      image: "https://i.scdn.co/image/ab6761610000e5eb02b3aa55ba238b2ceafb09da",
      name: "Jay Chou",
      id: "5",
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
