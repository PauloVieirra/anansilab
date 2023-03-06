import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function DeezerSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.deezer.com/search?q=${query}`);
    setResults(response.data.data);
  };

  const handleAddToFavorites = async (track) => {
    const response = await axios.post(`https://api.deezer.com/user/me/tracks?access_token=${accessToken}`, {
      track_id: track.id
    });
    console.log(response.data);
  };

  const handlePlayTrack = (track) => {
    setCurrentTrack(track.preview);
  };

  const handlePauseTrack = () => {
    setCurrentTrack(null);
  };

  const accessToken = '3d11887c87dd851a9a3a3621ef3dbe7e';
  console.log(accessToken);

  return (
    <div className='containertermos'>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search for a song" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {currentTrack && (
        <div>
          <audio src={currentTrack} controls autoPlay />
          <button onClick={handlePauseTrack}>Pause</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Duration</th>
            <th>Add to Favorites</th>
            <th>Play</th>
          </tr>
        </thead>
        <tbody>
          {results.map((track) => (
            <tr key={track.id} onClick={() => handlePlayTrack(track)}>
              <td>{track.title}</td>
              <td>{track.artist.name}</td>
              <td>{track.duration}</td>
              <td><button onClick={() => handleAddToFavorites(track)}>Add</button></td>
              <td><button onClick={() => handlePlayTrack(track)}>Play</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeezerSearch;
