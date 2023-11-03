import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListComponent = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost/index.php/song/list')
      .then((response) => {
        setSongs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching songs:', error);
      });
  }, []);

  return (
    <div>
      <h1>Song List</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id}>
              <td>{song.user}</td>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListComponent;