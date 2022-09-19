import React from "react";

const EventCard = ({ event }) => {
  return (
    <li className="mb-4 flex">
      <h3>{event.name}</h3>
    </li>
  );
};

export default EventCard;
