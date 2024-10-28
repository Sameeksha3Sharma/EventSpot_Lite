import React from 'react';
import Modal from 'react-modal';

const EventModal = ({ event, onClose }) => (
  <Modal isOpen={true} onRequestClose={onClose} className="modal animate__animated animate__fadeIn">
    <button onClick={onClose} className="close-btn">X</button>
    <img src={event.image} alt={event.name} />
    <h2>{event.name}</h2>
    <p>{event.date} - {event.location}</p>
    <p>{event.description}</p>
  </Modal>
);

export default EventModal;
