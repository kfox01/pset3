<<<<<<< HEAD
=======
import React, { useState } from 'react';
import axios from "axios";

const LoginComponent = ({ onLogin }) => {  // <-- Accept the onLogin prop here
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("Before Axios request");

        try {
            const response = await axios.post("http://localhost/index.php/user/login", {
                username,
                password
            });
            console.log("After Axios request");


            if (response.status === 200) {
                console.log("User logged in successfully", response.data);

                // Call the onLogin prop when the login is successful
                onLogin();

            } else {
                console.error("Error logging in", response.data.error);
            }
        } catch (error) {
            console.error("Error during request:", error);
        }
    };

    //const submit = async () => {
    //let res = await axios.post("http://localhost/index.php/user/create", {
    // username,
    //    password
    //   });
    //};
    return (
        <div className="login-container">
            <h3>LOGIN</h3>
            <form onSubmit={handleSubmit}>
                <div className="login-entries">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="login-form-control"
                        id="log-username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="login-entries">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="login-form-control"
                        id="log-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="login-submit-button">LOGIN</button>
            </form>
        </div>
    );

}

export default LoginComponent;
>>>>>>> origin/debug
