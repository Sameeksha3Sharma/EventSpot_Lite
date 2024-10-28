import React, { useState } from 'react';
import EventList from './components/EventList';
import './App.css';
import 'animate.css';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <nav className="navbar">
        <h1>EventSpot Lite</h1>
        <input
          type="text"
          placeholder="Search events"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </nav>
      <EventList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
