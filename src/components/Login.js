import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    // Replace this with your backend URL from Render
    const host = "https://inotebook-backend-f46v.onrender.com";

    const [credentials, setcredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.id]: e.target.value });
    };

    const getValidLogin = async () => {
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })
        });

        const json = await response.json();
        console.log(json);

        if (json.authtoken) {
            localStorage.setItem('token', json.authtoken);
            props.showAlert("success", "Logged in successfully");
            navigate("/home");
        } else {
            props.showAlert("danger", "Invalid credentials");
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        getValidLogin();
    };

    return (
        <div className="container mt-3">
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={credentials.email}
                        onChange={onChange}
                    />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={credentials.password}
                        onChange={onChange}
                    />
                </div>

                <button type="submit" className="btn" style={{ backgroundColor: "#F9FAFB" }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;