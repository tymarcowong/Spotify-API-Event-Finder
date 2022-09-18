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
      events: null,
    },
    {
      spotifyUrl: "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
      followers: 54476604,
      image: "https://i.scdn.co/image/ab6761610000e5eb5704a64f34fe29ff73ab56bb",
      name: "BTS",
      id: "3Nrfpe0tUJi4K4DXYWgMUX",
      events: [
        {
          name: "BTS Club Night",
          id: "G5dFZ925SCVp1",
          buyTicketsUrl:
            "https://www.ticketweb.uk/event/bts-club-night-the-garage-tickets/12317805?REFERRAL_ID=tmfeed",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
          ],
          sales: {
            public: {
              startDateTime: "2022-07-20T09:00:00Z",
              endDateTime: "2022-09-23T21:00:00Z",
            },
          },
          dates: {
            start: {
              localDate: "2022-09-23",
              localTime: "23:00:00",
              dateTime: "2022-09-23T22:00:00Z",
            },
            timezone: "Europe/London",
          },
          ageRestrictions: {
            legalAgeEnforced: false,
          },
          ticketing: {
            safeTix: {
              enabled: false,
            },
          },
          _embedded: {
            venues: [
              {
                name: "The Garage",
                id: "KovZ9177Akf",
                url: "https://www.ticketmaster.co.uk/the-garage-tickets-london/venue/254158",
                images: [
                  {
                    ratio: "16_9",
                    url: "https://s1.ticketm.net/dbimages/2295v.jpg",
                    width: 205,
                    height: 115,
                    fallback: false,
                  },
                ],
                postalCode: "N5 1RD",
                timezone: "Europe/London",
                city: {
                  name: "London",
                },
                country: {
                  name: "Great Britain",
                  countryCode: "GB",
                },
                address: {
                  line1: "20-22 Highbury Corner",
                },
                location: {
                  longitude: "-0.103855",
                  latitude: "51.546708",
                },
              },
            ],
          },
        },
      ],
    },
    {
      spotifyUrl: "https://open.spotify.com/artist/1snhtMLeb2DYoMOcVbb8iB",
      followers: 4089354,
      image: "https://i.scdn.co/image/ab6761610000e5eb248144419d84f33bf00d6863",
      name: "Kenshi Yonezu",
      id: "1snhtMLeb2DYoMOcVbb8iB",
      events: null,
    },
    {
      spotifyUrl: "https://open.spotify.com/artist/0bAsR2unSRpn6BQPEnNlZm",
      followers: 1965686,
      image: "https://i.scdn.co/image/ab6761610000e5eb1271824e2acc640a35c70397",
      name: "Aimer",
      id: "0bAsR2unSRpn6BQPEnNlZm",
      events: null,
    },
  ];

  useEffect(() => {
    // setArtists(test);
    // console.log(artists);

    const url = getEndpointUrl("/api/findEvents");
    const token = getTokenFromLS();
    const query = `?accessToken=${token}`;
    axios.get(url + query).then((res) => {
      console.log(res.data);
      // setArtists(res.data);
    });
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
