import React from "react";
import { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const navigate = useNavigate();

    let config = {
        //added withCredentials to config variable, now i see the cookie in the application tab of inspect!
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/login", {
            email,
            password
        },config)
        .then((res) => {
            console.log(res)
            navigate('/');
        })
        .catch((err) => {console.log(err)})
    }

    const handleLogout = async () => {
        try {
        const response = await axios.post("http://localhost:8000/logout")
            setSuccessMsg(response.msg)
        } 
        catch (error) {console.log(error.response)}
    }

    return (
        <div>
            <form onSubmit={handleLogin} >
                <button onClick={handleLogout}>Logout</button>
                <label>Email:</label>
                <input value={email} onChange={(e)=> {setEmail(e.target.value)}}></input>
                <label>Password:</label>
                <input value={password} onChange={(e)=> {setPassword(e.target.value)}}></input>
                <button  type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login;