import React, { useState } from 'react';
import './App.css';
import SongForm from './SongForm';
import SongList from './SongList';

function App() {
  const [username, setUsername] = useState('kyraf'); // Just a placeholder for now
  const [songRatings, setSongRatings] = useState([]);

  return (
    <div className="App container">
      {/* Title and Welcome Section */}
      <header className="App-header mt-4">
        <h1>SongStars</h1>
        <p>Welcome, {username}!</p>
      </header>

      {/* Rating Creation Section */}
      <SongForm onNewRating={(rating) => setSongRatings(prev => [...prev, rating])} />

      {/* Song Ratings Display Section */}
      <SongList ratings={songRatings} />
    </div>
  );
}

export default App;

