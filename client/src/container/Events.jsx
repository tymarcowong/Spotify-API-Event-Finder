import React from "react";
import EventCard from "../components/EventCard";

const Events = ({ events }) => {
  return (
    <>
      {events.length > 0 ? (
        <ul>
          {events?.map((event) => (
            <EventCard key={1} event={event} />
          ))}
        </ul>
      ) : (
        <h3>No upcoming events of the artist in the database.</h3>
      )}
    </>
  );
};

export default Events;
