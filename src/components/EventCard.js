import React, { useState } from 'react';
import EventModal from './EventModal';
import 'animate.css';

const EventCard = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="event-card animate__animated animate__fadeIn" onClick={() => setIsOpen(true)}>
      <img src={event.image} alt={event.name} />
      <h3>{event.name}</h3>
      <p>{event.date} - {event.location}</p>
      {isOpen && <EventModal event={event} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default EventCard;
