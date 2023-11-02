import axios from "axios";
import React, { useState } from 'react';

const LoginComponent = ({ onLogin }) => {  // <-- Accept the onLogin prop here
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost/indexphp/user/login", {
                username: username,
                password: password
            });

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

    return (
        <div className="login-container">
            <a href="registration.php">
                <button className="login-register-button">Register</button>
            </a>
            <h3>LOGIN</h3>
            <form onSubmit={handleSubmit}>
                <div className="login-entries">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="login-form-control" id="username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="login-entries">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="login-form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="login-submit-button">LOGIN</button>
            </form>
        </div>
    );
    
}

export default LoginComponent;
