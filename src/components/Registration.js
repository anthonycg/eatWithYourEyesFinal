import React from "react";
import { useState } from "react";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div>
            <label>First Name:</label>
            <input onChange={(e)=> {setFirstName(e.target.value)}}></input>
            <label>Last Name:</label>
            <input onChange={(e)=> {setLastName(e.target.value)}}></input>
            <label>Email:</label>
            <input onChange={(e)=> {setEmail(e.target.value)}}></input>
            <label>Password:</label>
            <input onChange={(e)=> {setPassword(e.target.value)}}></input>
            <button type="submit">Sign up</button>
        </div>
    )
}

export default Registration;