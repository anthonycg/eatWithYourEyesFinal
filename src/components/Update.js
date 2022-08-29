import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();
    const {authorList, setAuthorList} = props;
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:8000/api/posts/" + id)
        .then(
            (res) => {
                console.log(res.data)
                setItemName(res.data.itemName)
                setDescription(res.data.description)
                setCompanyWebsite(res.data.companyWebsite)
            }
        )
        .catch(err=> {console.log(err)})
    }, [])

    const updatePost = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/posts/" + id, {
            itemName,
            description,
            companyWebsite
        })
        .then(res => {
            console.log(res);
            navigate("/api/posts");
        })
        .catch((err)=>{
            console.log(err.response.data.err.errors)
            const errorResponse = err.response.data.err.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
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
              src="/images/RESTO.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Edit Post
            </h2>
          </div>
          <form onSubmit={updatePost} className="mt-8 space-y-6" action="#" method="POST">
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
                    value={itemName}
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
                    value={description}
                    autoComplete="text"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Description"
                />
              </div>
              {/* <div>
                <label htmlFor="password" className="sr-only">
                  Image
                </label>
                <input
                onChange={fileSelectedHandler}
                id="image_url"
                name="image_url"
                type="file"
                accept="image/*"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Image Upload"
                />
              </div> */}
              <div>
                <label htmlFor="confirm-password" className="sr-only">
                  Company Website
                </label>
                <input
                onChange={(e) => setCompanyWebsite(e.target.value)}
                id="companyWebsite"
                name="companyWebsite"
                value={companyWebsite}
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" />
                </svg>
                </span>
                Update Post
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>

        // <div className="container">

        //     <form onSubmit={updatePost}>
        //     {errors.map((err, index) => <p key={index}>{err}</p>)}
        //     {errors.name}
        //     <h2>Edit a Post</h2>
        //     <label>Name</label>
        //     <input type="text" name="name" 
        //     value={itemName}
        //     onChange={(e) => {setItemName(e.target.value)}}></input>
        //     <label style={{marginTop: "13px"}}>Description</label>
        //     <input type="text" name="name" 
        //     value={description}
        //     onChange={(e) => {setDescription(e.target.value)}}></input>
        //     <label style={{marginTop: "13px"}}>Link:</label>
        //     <input type="text" name="name" 
        //     value={companyWebsite}
        //     onChange={(e) => {setCompanyWebsite(e.target.value)}}></input>
        //     <input className="btn btn-primary" style={{marginTop: "10px"}} type="submit" />
        //     <div style={{marginTop: "10px"}}>
        //         <Link  to="/api/posts">Back to all posts</Link>
        //     </div>
        //     </form>
        // </div>
    )
}

export default Update;