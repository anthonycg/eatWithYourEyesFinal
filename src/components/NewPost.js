import React from "react";
import {useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";

const NewPost = () => {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImage_url] = useState();
    const [companyWebsite, setCompanyWebsite] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("")

    let config = {
        //added withCredentials to config variable, now i see the cookie in the application tab of inspect!
        withCredentials: true,
        headers: {
        'Content-Type': 'multipart/form-data',

        }
    }
    const fileSelectedHandler = (e) => {
            console.log(e.target.files[0])
            setImage_url(e.target.files[0])
            const base64String = btoa(String.fromCharCode(...new Uint8Array(image_url)));
    }

    // fileUploadHandler = () => {
    // Will use this function when I add upload button for file only.
    // }

    const handleNewPost = (e) => {
        const fd = new FormData();
        fd.append('itemName', itemName)
        fd.append('description', description)
        fd.append('image_url', image_url)
        fd.append('companyWebsite', companyWebsite)

        e.preventDefault()
        axios.post("http://localhost:8000/api/posts/new", fd,
        // {itemName:itemName,
        // description: description,
        // image_url: image_url,
        // companyWebsite: companyWebsite}, 
        config)
        .then((res) => {
            console.log(res)
            navigate("/api/posts")
        })
        .catch((err) => {
            console.log(err)
            navigate("/api/login")
            // setErrorMessage(err.response.data.message)
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
                    to={"/api/posts"}><button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button>
                </Link> 
            </div>
            <img
              className="mx-auto h-12 w-auto"
              style={{width:"2rem", height:"6rem"}}
              src="https://i.imgur.com/vEOmfZ3.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Create New Post
            </h2>
          </div>
          <form onSubmit={handleNewPost} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="companyName" className="sr-only">
                  Item Name
                </label>
                <input
                    onChange={(e)=> setItemName(e.target.value)}
                    id="item-name"
                    name="item-name"
                    type="text"
                    autoComplete="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Item Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Description
                </label>
                <input
                    onChange={(e)=> {setDescription(e.target.value)}}
                    id="description"
                    name="description"
                    type="text"
                    autoComplete="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Description"
                />
              </div>
              <div>
                <label htmlFor="post-image" className="sr-only">
                  Image
                </label>
                <input
                onChange={fileSelectedHandler}
                id="image_url"
                name="image_url"
                type="file"
                accept="image/*"
                autoComplete="post-image"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Image Upload"
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Company Website
                </label>
                <input
                onChange={(e) => setCompanyWebsite(e.target.value)}
                id="companyWebsite"
                name="companyWebsite"
                type="text"
                autoComplete="companyWebsite"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Company Website"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <ArrowCircleUpIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>

        // <div className="container">
        //         <h2>New Post</h2>
        //     <h5 className="error-text" style={{color:"red"}}>{errorMessage ? errorMessage: ""}</h5>
        //     <form onSubmit={handleNewPost}>
        //         <label>Item Name:</label>
        //         <input value={itemName} onChange={(e) => setItemName(e.target.value)}></input>
        //         <label>Description:</label>
        //         <input value={description} onChange={(e) => setDescription(e.target.value)}></input>
        //         <label>Image URL:</label>
        //         <input type="file" accept="image/*" name='image_url' onChange={fileSelectedHandler}></input>
        //         <label>Order Now Link:</label>
        //         <input value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)}></input>
        //         <input type="submit"></input>
        //         <div>
        //         <Link to="/api/posts">All Posts</Link>
        //         </div>
        //     </form>



        // </div>
    )
}

export default NewPost;