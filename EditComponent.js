import axios from "axios";
import React, { useState } from 'react';

const EditComponent = ({ onSongEdit }) => {  // <-- Add the onSongEdit prop here
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put("http://localhost/indexphp/song/edit", {
                id: id,
                title: title,
                artist: artist,
                rating: rating
            });

            if (response.status === 200) {
                console.log("Song updated successfully", response.data);
                
                // After a successful update, call the onSongEdit function
                // with the edited song details
                onSongEdit({
                    id: id,
                    title: title,
                    artist: artist,
                    rating: rating
                });

            } else {
                console.error("Error updating song", response.data.error);
            }
        } catch (error) {
            console.error("Error during request:", error);
        }
    };

    return (
        <div className="edit-song-container">
            <h3>Edit Song</h3>
            <form onSubmit={handleSubmit}>
                <div className="edit-song-entries">
                    <label htmlFor="id">ID</label>
                    <input type="text" className="edit-song-form-control" id="id" value={id} onChange={e => setId(e.target.value)} />
                </div>
                <div className="edit-song-entries">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="edit-song-form-control" id="title" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="edit-song-entries">
                    <label htmlFor="artist">Artist</label>
                    <input type="text" className="edit-song-form-control" id="artist" value={artist} onChange={e => setArtist(e.target.value)} />
                </div>
                <div className="edit-song-entries">
                    <label htmlFor="rating">Rating</label>
                    <input type="text" className="edit-song-form-control" id="rating" value={rating} onChange={e => setRating(e.target.value)} />
                </div>
                <button type="submit" className="edit-song-submit-button">Update Song</button>
            </form>
        </div>
    );
    
}

export default EditComponent;

