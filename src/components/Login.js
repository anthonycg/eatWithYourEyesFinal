import React from "react";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <label>Email:</label>
            <input onChange={(e)=> {setEmail(e.target.value)}}></input>
            <label>Password:</label>
            <input onChange={(e)=> {setPassword(e.target.value)}}></input>
            <button type="submit">Login</button>
        </div>
    )
}

export default Login;