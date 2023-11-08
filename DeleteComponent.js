import axios from "axios";
import React, { useState } from 'react';

const DeleteComponent = (props) => {  // <-- Add props here
    const [id, setId] = useState(''); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios({
                method: 'delete',
                url: "http://localhost/indexphp/song/delete",
                data: {
                    id: id
                }
            });

            if (response.status === 200) {
                console.log("Song deleted successfully", response.data);
                props.onSongDelete(id);  // <-- Use the ID from state here
            } else {
                console.error("Error deleting song", response.data.error);
            }
        } catch (error) {
            console.error("Error during request:", error);
        }
    };

    return (
        <div className="delete-song-container">
            <h3>Delete Song</h3>
            <form onSubmit={handleSubmit}>
                <div className="delete-song-entries">
                    <label htmlFor="id">Song ID:</label>
                    <input type="text" className="delete-song-form-control" id="id" value={id} onChange={e => setId(e.target.value)} />
                </div>
                <button type="submit" className="delete-song-submit-button">Delete Song</button>
            </form>
        </div>
    );
    
}

export default DeleteComponent;