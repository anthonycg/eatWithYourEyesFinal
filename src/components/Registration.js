import axios from "axios";
import React from "react";
import { useState } from "react";

const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    let config = {
        headers: {
        'Content-Type': 'application/json',
        },
}

    const handleRegistration = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/register", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword 
    }, config 
)
        .then (res =>
            console.log(res.data)
        )
        .catch(err => console.log(err)
        )
    }

    return (
        <div >
            <form onSubmit={handleRegistration}>
            <label>First Name:</label>
            <input value={firstName} onChange={(e)=> {setFirstName(e.target.value)}}></input>
            <label>Last Name:</label>
            <input value={lastName} onChange={(e)=> {setLastName(e.target.value)}}></input>
            <label>Email:</label>
            <input value={email} onChange={(e)=> {setEmail(e.target.value)}}></input>
            <label>Password:</label>
            <input value={password} onChange={(e)=> {setPassword(e.target.value)}}></input>
            <label>Confirm Password:</label>
            <input value={confirmPassword} onChange={(e)=> {setConfirmPassword(e.target.value)}}></input>
            <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default Registration;