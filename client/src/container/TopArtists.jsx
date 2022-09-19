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
      events: [],
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
          ticketUrl:
            "https://www.ticketweb.uk/event/bts-club-night-the-garage-tickets/12317805?REFERRAL_ID=tmfeed",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
          ],
          time: {
            date: "2022-09-23",
            time: "23:00:00",
            timezone: "Europe/London",
          },
          status: "onsale",
          venue: {
            name: "The Garage",
            url: "https://www.ticketmaster.co.uk/the-garage-tickets-london/venue/254158",
            image: "https://s1.ticketm.net/dbimages/2295v.jpg",
            address: {
              postCode: "N5 1RD",
              city: {
                name: "London",
              },
              country: "Great Britain",
              address: {
                line1: "20-22 Highbury Corner",
              },
            },
            coords: {
              lat: "51.546708",
              lng: "-0.103855",
            },
          },
        },
        {
          name: "UH2BT K-POP DJ Night",
          id: "rZ7HnEZ1A33du4",
          ticketUrl:
            "https://www.ticketweb.com/event/uh2bt-k-pop-dj-night-ace-cafe-tickets/12483355",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "1_1",
              url: "https://i.ticketweb.com/i/00/11/37/11/69_Edp.jpg",
              width: 427,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/df8/81eadad8-4449-412e-a2b1-3d8bbb78edf8_106181_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
          ],
          time: {
            date: "2022-10-08",
            time: "22:00:00",
            timezone: "America/New_York",
          },
          status: "onsale",
          venue: {
            name: "Ace Cafe",
            url: "https://www.ticketweb.com/venue/ace-cafe-orlando-fl/474855",
            address: {
              postCode: "32801",
              city: {
                name: "Orlando",
              },
              country: "United States Of America",
              address: {
                line1: "100 W. Livingston Street",
              },
            },
            coords: {
              lat: "28.547477",
              lng: "-81.380886",
            },
          },
        },
        {
          name: "UH2BT - An Interactive Pop-Up Party - K POP Night",
          id: "rZ7HnEZ1A38e7P",
          ticketUrl:
            "https://www.ticketweb.com/event/uh2bt-an-interactive-sonia-tickets/12402125",
          images: [
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "1_1",
              url: "https://i.ticketweb.com/i/00/11/30/74/69_Edp.jpg",
              width: 427,
              height: 427,
              fallback: false,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/f50/96fa13be-e395-429b-8558-a51bb9054f50_105951_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
          ],
          time: {
            date: "2022-09-22",
            time: "22:00:00",
            timezone: "America/New_York",
          },
          status: "cancelled",
          venue: {
            name: "Sonia",
            url: "https://www.ticketweb.com/venue/sonia-cambridge-ma/435615",
            address: {
              postCode: "02139",
              city: {
                name: "Cambridge",
              },
              country: "United States Of America",
              address: {
                line1: "10 Brookline St.",
              },
            },
            coords: {
              lat: "42.363501",
              lng: "-71.10162",
            },
          },
        },
        {
          name: "Stadium Tour - September 19th 2022 - 14:30",
          id: "ZqqgVMyxjZBYPzIVyymzcMBiEXZA7e7",
          ticketUrl: "https://www.eticketing.co.uk/scottishrugby",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
          ],
          time: {
            date: "2022-09-19",
            time: "14:30:00",
            timezone: "Europe/London",
          },
          status: "onsale",
          venue: {
            name: "BT Murrayfield Stadium",
            url: "https://www.ticketmaster.co.uk/bt-murrayfield-stadium-tickets-edinburgh/venue/443365",
            image: "https://s1.ticketm.net/dbimages/671v.jpg",
            address: {
              postCode: "EH12 5PJ",
              city: {
                name: "Edinburgh",
              },
              country: "Great Britain",
              address: {
                line1: "Murrayfield",
              },
            },
            coords: {
              lat: "55.94078064",
              lng: "-3.24194169",
            },
          },
        },
        {
          name: "Stadium Tour - September 19th 2022 - 11:00",
          id: "ZqqgVMyxjZBYPzIVyymzcMBiEXZAd1d",
          ticketUrl: "https://www.eticketing.co.uk/scottishrugby",
          images: [
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_16_9.jpg",
              width: 640,
              height: 360,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_3_2.jpg",
              width: 640,
              height: 427,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RECOMENDATION_16_9.jpg",
              width: 100,
              height: 56,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_ARTIST_PAGE_3_2.jpg",
              width: 305,
              height: 203,
              fallback: true,
            },
            {
              ratio: "3_2",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_3_2.jpg",
              width: 1024,
              height: 683,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
              width: 2048,
              height: 1152,
              fallback: true,
            },
            {
              ratio: "4_3",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_CUSTOM.jpg",
              width: 305,
              height: 225,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_EVENT_DETAIL_PAGE_16_9.jpg",
              width: 205,
              height: 115,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_16_9.jpg",
              width: 1024,
              height: 576,
              fallback: true,
            },
            {
              ratio: "16_9",
              url: "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_LANDSCAPE_16_9.jpg",
              width: 1136,
              height: 639,
              fallback: true,
            },
          ],
          time: {
            date: "2022-09-19",
            time: "11:00:00",
            timezone: "Europe/London",
          },
          status: "onsale",
          venue: {
            name: "BT Murrayfield Stadium",
            url: "https://www.ticketmaster.co.uk/bt-murrayfield-stadium-tickets-edinburgh/venue/443365",
            image: "https://s1.ticketm.net/dbimages/671v.jpg",
            address: {
              postCode: "EH12 5PJ",
              city: {
                name: "Edinburgh",
              },
              country: "Great Britain",
              address: {
                line1: "Murrayfield",
              },
            },
            coords: {
              lat: "55.94078064",
              lng: "-3.24194169",
            },
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
      events: [],
    },
    {
      spotifyUrl: "https://open.spotify.com/artist/0bAsR2unSRpn6BQPEnNlZm",
      followers: 1965686,
      image: "https://i.scdn.co/image/ab6761610000e5eb1271824e2acc640a35c70397",
      name: "Aimer",
      id: "0bAsR2unSRpn6BQPEnNlZm",
      events: [],
    },
  ];

  const testing = false;
  useEffect(() => {
    if (testing) {
      setArtists(test);
      console.log(test);
    } else {
      const url = getEndpointUrl("/api/findEvents");
      const token = getTokenFromLS();
      const query = `?accessToken=${token}`;
      axios.get(url + query).then((res) => {
        console.log(res.data);
        setArtists(res.data);
      });
    }
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
