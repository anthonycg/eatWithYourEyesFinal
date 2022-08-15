import React from "react";
import { useState } from "react";
import axios from "axios"
import {useNavigate, useParams, Link} from "react-router-dom";

const Login = (props) => {
    const {id} = useParams();
    let {companyInfo, setCompanyInfo, getCompanyInfo} = props;
    // const [companyInfo, setCompanyInfo] = useState("");
    let [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
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
            console.log(props.companyInfo)
            // props.getCompanyInfo(res.data.userLoggedIn.companyId);
            // axios.get("http://localhost:8000/api/companies/"+res.data.userLoggedIn.companyId)
            // .then(res => {
            //     console.log(res.data);
            //     setCompanyInfo(res.data);
            // })
            // .catch(err=> console.log(err))
            // console.log(res.data.userLoggedIn)
            // console.log(companyInfo)
            navigate('/');
        })
        .catch((err) => {
            console.log(err)
            setErrorMessage(err.response.data.message)
        })
    }

    const handleLogout = async () => {
        try {
        const response = await axios.post("http://localhost:8000/api/logout")
            setSuccessMsg(response.msg)
        } 
        catch (error) {console.log(error.response)}
    }

    return (
        <div>
            <h2>Login</h2>
            <h5 className="error-text" style={{color:"red"}}>{errorMessage ? errorMessage: ""}</h5>
            {
                //company Name is not an empty string
                companyName ?
                <p> You are logged in as {companyName}</p>:
                <p>Please Login!</p>
            }
            <div style={{marginBottom:"18px"}}>
                <Link to="/api/register">Don't have an account? Sign Up</Link>
            </div>

            <form onSubmit={handleLogin} >
                {/* <button onClick={handleLogout}>Logout</button> */}
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