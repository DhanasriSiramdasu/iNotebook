import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    const [credentials, setcredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.id]: e.target.value });
    }

    // async function fetchNotes() {
    //     const token = localStorage.getItem('token');
    //     const response = await fetch('http://localhost:5000/api/notes/fetchallnotes', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'auth-token': token
    //         }
    //     });

    //     if (response.status === 401) {
    //         // handle unauthorized, maybe redirect to login
    //         console.error('Unauthorized: token missing/invalid');
    //         return;
    //     }

    //     const notes = await response.json();
    //     console.log(notes);
    //     // set state with notes
    // }

    const getValidLogin = async () => {
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        console.log(json.authtoken);
        // after successful login
        if (json.authtoken) {
            localStorage.setItem('token', json.authtoken);
            props.showAlert("success","Logged in successfully");
            navigate("/home");   
        } else {
            props.showAlert("danger","Invalid credentials");
        }

    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
        getValidLogin();
    }
    return (
        <div className="container mt-3">
            <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn" style={{backgroundColor: "#FFE75C"}} >Submit</button>
            </form>
        </div>
    )
}

export default Login;
