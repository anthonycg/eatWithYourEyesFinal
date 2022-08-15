import axios from "axios";
import React from "react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

const Registration = () => {
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    let config = {
        headers: {
        'Content-Type': 'application/json',
        },
}

    const handleRegistration = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/register", {
        companyName,
        email,
        password,
        confirmPassword 
    }, config 
)
        .then (res =>
            {console.log(res.data)
            navigate('/api/login');}
        )
        .catch((err) => {
            console.log(err)
            setErrorMessage(err.response.data.message)
        }
        )
    }

    return (
        <div className="container" >
            <h2>Register</h2>
            <h5 className="error-text" style={{color:"red"}}>{errorMessage ? errorMessage: ""}</h5>
            <form onSubmit={handleRegistration}>
            <div style={{marginBottom:"18px"}}>
                <Link to="/api/login">Have an account? Login</Link>
            </div>
            <label>Company Name:</label>
            <input value={companyName} onChange={(e)=> {setCompanyName(e.target.value)}}></input>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e)=> {setEmail(e.target.value)}}></input>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e)=> {setPassword(e.target.value)}}></input>
            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={(e)=> {setConfirmPassword(e.target.value)}}></input>
            <button style={{marginTop: "10px"}} className="btn btn-primary" type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default Registration;