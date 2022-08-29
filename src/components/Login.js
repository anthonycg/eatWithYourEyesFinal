import React from "react";
import { useState } from "react";
import axios from "axios"
import {useNavigate, useParams, Link} from "react-router-dom";
import { LockClosedIcon } from '@heroicons/react/solid'

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
        <div style={{width:"100vw"}}>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
            style={{width:"2rem", height:"8rem"}}
            src="../images/RESTO.png"
            className="mx-auto h-12 w-auto"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <Link className="font-medium text-indigo-600 hover:text-indigo-500" 
              to="/api/register">Don't have an account? Sign Up</Link>
            </p>
          </div>
          <form onSubmit={handleLogin} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                    onChange={(e)=> {setEmail(e.target.value)}}
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                onChange={(e)=> {setPassword(e.target.value)}}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
        </div>


        // <div>
        //     <h1>Eat With Your Eyes</h1>
        //     <h2>Login</h2>
        //     <h5 className="error-text" style={{color:"red"}}>{errorMessage ? errorMessage: ""}</h5>
        //     {/* {
        //         //company Name is not an empty string
        //         companyName ?
        //         <p> You are logged in as {companyName}</p>:
        //         <p>Please Login!</p>
        //     } */}

        //     <form onSubmit={handleLogin} >
        //         {/* <button onClick={handleLogout}>Logout</button> */}
        //         <label>Email:</label>
        //         <input value={email} onChange={(e)=> {setEmail(e.target.value)}}></input>
        //         <label>Password:</label>
        //         <input type="password" value={password} onChange={(e)=> {setPassword(e.target.value)}}></input>
        //         <button className="btn btn-primary" style={{marginLeft: "10px"}} type="submit">Login</button>
        //     </form>

        //     <div style={{marginTop:"18px"}}>
        //         <Link to="/api/register">Don't have an account? Sign Up</Link>
        //     </div>
        // </div>
    )
}

export default Login;