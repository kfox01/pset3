import React, { useState } from 'react';
import './App.css';
import RegisterComponent from './RegisterComponent';
import LoginComponent from './loginComponent';
import AddComponent from './AddComponent';
import EditComponent from './EditComponent';
import DeleteComponent from './DeleteComponent';

function App() {
  const [username, setUsername] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [songs, setSongs] = useState([]);

  const handleSongAddition = (newSong) => {
    setSongs(prevSongs => [...prevSongs, newSong]);
  };

  const handleSongEdit = (editedSong) => {
    setSongs(prevSongs => prevSongs.map(song => song.id === editedSong.id ? editedSong : song));
  };

  const handleSongDelete = (deletedSongId) => {
    setSongs(prevSongs => prevSongs.filter(song => song.id !== deletedSongId));
  };

  if (!isAuthenticated) {
    return (
      <div className="App">
        <LoginComponent onLogin={() => setIsAuthenticated(true)} />
        <RegisterComponent 
          onRegister={(user) => {
            setUsername(user);
            setIsAuthenticated(true);
          }} 
          onError={setErrorMessage}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  }

  return (
    <div className="App container">
      <header className="App-header mt-4">
        <h1>SongStars</h1>
        {username && <p>Welcome, {username}!</p>}
      </header>
      
      <AddComponent onSongAdditon={handleSongAddition} />
      <EditComponent onSongEdit={handleSongEdit} />
      <DeleteComponent onSongDelete={handleSongDelete} />

      {/* Display the songs in a list */}
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title} by {song.artist}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;