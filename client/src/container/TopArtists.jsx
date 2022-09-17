import React from "react";

const TopArtists = ({ artists }) => {
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
