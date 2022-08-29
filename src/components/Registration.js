import axios from "axios";
import React from "react";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { LockClosedIcon } from '@heroicons/react/solid'


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
        <div style={{width:"100vw"}}>
        <div  className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              style={{width:"2rem", height:"8rem"}}
              src="../images/RESTO.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <Link className="font-medium text-indigo-600 hover:text-indigo-500" 
              to="/api/login">Already have an account? Login</Link>
            </p>
          </div>
          <form onSubmit={handleRegistration} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="companyName" className="sr-only">
                  Company Name
                </label>
                <input
                    onChange={(e)=> {setCompanyName(e.target.value)}}
                    id="company-name"
                    name="company-name"
                    type="text"
                    autoComplete="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Company Name"
                />
              </div>
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
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Confirm Password
                </label>
                <input
                onChange={(e)=> {setConfirmPassword(e.target.value)}}
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="confirm-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                />
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
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>

        // <div className="container" >
        //     <h2>Register</h2>
        //     <h5 className="error-text" style={{color:"red"}}>{errorMessage ? errorMessage: ""}</h5>
        //     <form onSubmit={handleRegistration}>
        //     <div style={{marginBottom:"18px"}}>
        //         <Link to="/api/login">Have an account? Login</Link>
        //     </div>
        //     <label>Company Name:</label>
        //     <input value={companyName} onChange={(e)=> {setCompanyName(e.target.value)}}></input>
        //     <label>Email:</label>
        //     <input type="email" value={email} onChange={(e)=> {setEmail(e.target.value)}}></input>
        //     <label>Password:</label>
        //     <input type="password" value={password} onChange={(e)=> {setPassword(e.target.value)}}></input>
        //     <label>Confirm Password:</label>
        //     <input type="password" value={confirmPassword} onChange={(e)=> {setConfirmPassword(e.target.value)}}></input>
        //     <button style={{marginTop: "10px"}} className="btn btn-primary" type="submit">Sign up</button>
        //     </form>
        // </div>
    )
}

export default Registration;