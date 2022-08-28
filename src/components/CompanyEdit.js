import react, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { ArrowCircleUpIcon } from '@heroicons/react/solid'

const CompanyEdit = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [companyName, setCompanyName] =  useState("");
    const [email, setEmail] = useState("");
    const [postsCreated, setPostsCreated] = useState();
    const [companyCity, setCompanyCity] = useState("");
    const [companyState, setCompanyState] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyDescription, setCompanyDesciption] = useState("");
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState("");

    let config = {
        //added withCredentials to config variable, now i see the cookie in the application tab of inspect!
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        }
    }

    useEffect((e) => {
        
        console.log(window.sessionStorage)
        axios.get("http://localhost:8000/api/companies/"+JSON.parse(sessionStorage.getItem("companyId")), {}, config)
        .then((res) => {
            setCompanyName(res.data.companyName)
            setEmail(res.data.email)
            setPostsCreated(res.data.postsCreated)
            setCompanyCity(res.data.companyCity)
            setCompanyState(res.data.companyState)
            setCompanyAddress(res.data.companyAddress)
            setCompanyDesciption(res.data.companyDescription)
            setCompanyPhoneNumber(res.data.companyPhoneNumber)
        }
        )
        .catch(
            err => console.log(err)
        )
        }
    , [])

    const EditHandler = (e) => {
        axios.put("http://localhost:8000/api/companies/edit/"+JSON.parse(sessionStorage.getItem("companyId")), {
        companyName:companyName,
        email:email,
        companyCity: companyCity,
        companyState: companyState,
        companyAddress: companyAddress,
        companyDescription: companyDescription,
        companyPhoneNumber:companyPhoneNumber
        }, config)
        .then((res) => {
            console.log(res)
            
        })
        .catch((err) => {
            console.log(err)
        })

    }
    return (

        <div style={{width:"100vw"}}>
        <div  className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div>
            <Link
                state= {{companyId: JSON.parse(sessionStorage.getItem("companyId"))}} 
                to={"/api/companies/"+ JSON.parse(sessionStorage.getItem("companyId")) }><button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</button></Link> 
            </div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Edit Your Profile
            </h2>
            {/* <p className="mt-2 text-center text-sm text-gray-600">
              <Link className="font-medium text-indigo-600 hover:text-indigo-500" 
              to="/api/login">Already have an account? Login</Link>
            </p> */}
          </div>
          <form onSubmit={EditHandler} className="mt-8 space-y-6">
            <input type="hidden"/>
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
                    value={companyName}
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
                    value={email}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="companyCity" className="sr-only">
                  Company City
                </label>
                <input
                onChange={(e)=> {setCompanyCity(e.target.value)}}
                type="text"
                value={companyCity}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Company City"
                />
              </div>
              <div>
                <label htmlFor="companyState" className="sr-only">
                  Company State
                </label>
                <input
                onChange={(e)=> {setCompanyState(e.target.value)}}
                type="text"
                value={companyState}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Company State"
                />
              </div>
              <div>
                <label htmlFor="companyAddress" className="sr-only">
                  Company Address
                </label>
                <input
                onChange={(e)=> {setCompanyAddress(e.target.value)}}
                type="text"
                value={companyAddress}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Company Address"
                />
              </div>
              <div>
                <label htmlFor="companyDescription" className="sr-only">
                  Company Description
                </label>
                <textarea rows={5}
                onChange={(e)=> {setCompanyDesciption(e.target.value)}}
                type="text"
                required
                value={companyDescription}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Company Description"
                />
              </div>
              <div>
                <label htmlFor="companyPhoneNumber" className="sr-only">
                  Phone Number
                </label>
                <input
                onChange={(e)=> {setCompanyPhoneNumber(e.target.value)}}
                type="text"
                required
                value={companyPhoneNumber}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">

                </div>
            </div>
            <div>
            <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" />
                </svg>
                </span>
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>

        /* <div>
            <form onSubmit={EditHandler}>
            <label>Company Name:</label>
            <input value={companyName} onChange={(e) => {setCompanyName(e.target.value)}}></input>
            <label>Company Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <label>City:</label>
            <input value={companyCity} onChange={(e) => setCompanyCity(e.target.value)}></input>
            <label>State:</label>
            <input value={companyState} onChange={(e) => setCompanyState(e.target.value)}></input>
            <label>Company Address:</label>
            <input value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)}></input>
            <label>Description:</label>
            <input value={companyDescription} onChange={(e) => setCompanyDesciption(e.target.value)}></input>
            <label>Phone Number:</label>
            <input value={companyPhoneNumber} onChange={(e) => setCompanyPhoneNumber(e.target.value)}></input>
            <input type="submit"></input>
            </form>
        </div> */
    )
}

export default CompanyEdit;