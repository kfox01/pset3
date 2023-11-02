import axios from "axios";
import React, { useState } from 'react';

const RegistrationComponent = ({ onRegister, onError }) => {  // <-- Accept the onRegister and onError props
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setCPassword] = useState('');


    const handleSubmit = async (event) => {
        /*event.preventDefault();*/

        //if (password !== c_password) {
        //console.error("Passwords do not match!");
        // onError("Passwords do not match!"); // <-- Call onError prop with error message
        //  return;
        // }

        try {
            console.log("Before Axios request");
            const response = await axios.post("http://localhost/index.php/user/create", {
                username,
                password,
                c_password
            });
            console.log("AfterAxios request");

            if (response.status === 201) {
                console.log("User added successfully", response.data);
                onRegister({ username: username }); // <-- Call onRegister prop with user details
            } else {
                console.error("Error registering", response.data.error);
                onError(response.data.error); // <-- Call onError prop with error message
            }
        } catch (error) {
            console.error("Error during request:", error);
            onError("Registration failed due to an unexpected error."); // <-- Call onError prop with generic error message
        }
    };

    return (
        <div className="register-container">
            <h3>REGISTER</h3>
            <form onSubmit={handleSubmit}>
                <div className="register-entries">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="register-form-control"
                        id="reg-username"
                        value={username}
                        onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="register-entries">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="register-form-control"
                        id="reg-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="register-entries">
                    <label htmlFor="c_password">Confirm Password</label>
                    <input
                        type="password"
                        className="register-form-control"
                        id="c_password" value={c_password}
                        onChange={e => setCPassword(e.target.value)} />
                </div>
                <button type="submit" className="register-submit_button">REGISTER</button>
            </form>
        </div>
    );

}

export default RegistrationComponent;
