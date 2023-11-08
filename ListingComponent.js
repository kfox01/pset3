import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const [songs, setSongs] = useState([]);

useEffect(() => {
  axios.get('http://localhost/index.php/song/allSongs')
    .then((response) => {
      setSongs(response.data);
    })
    .catch((error) => {
      console.error('Error fetching songs:', error);
    });
}, []);

const songData = {
  labels: songs.map((song) => song.title),
  datasets: [
    {
      label: 'Ratings',
      data: songs.map((song) => song.rating),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

return (
  <div>
    <h1>Song Ratings</h1>
    <div style={{ height: '400px', width: '600px' }}>
      <Bar data={songData} options={{ maintainAspectRatio: false }} />
    </div>
  </div>
);


export default ListComponent;
