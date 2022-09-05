import React, { useState } from "react";
import axios from 'axios';
import Images from "./Images";
import { useContext } from "react";
import photoContext from "../views/Main"
import "../Search.css"
import {Link} from "react-router-dom";

<script async defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`}></script>

const Search = (props) => {
    const {getImages, photos, setPhotos, companyInfo, setCompanyInfo} = props;
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [postData, setPostData] = useState([]);


    const searchHandler = (e) => { 
        e.preventDefault()

        let config = {
            //added withCredentials to config variable, now i see the cookie in the application tab of inspect!
            // withCredentials: true,
            
            headers: {
            'Content-Type': 'application/json',
            //may use these controls later if user must be logged in to search
            // 'Access-Control-Allow-Origin': 'http://localhost:3000/',
            // 'Access-Control-Allow-Credentials': true,
            // Accept: "application/json"
            }
        }

       let data = {
        term:term, 
        location: location
    }

        //axios.get to the local database for our post's pictures
        axios.get("http://localhost:8000/api/posts",{ params: {
            term:term, 
            location: location}
        }, config)
        .then((res) => 
        {
        setPostData(res.data)
        console.log(res.data)})
        .catch(err => console.log(err))

        axios.post('http://localhost:8000/results1', data, config)
        .then( (res) => {
            setPhotos(res.data)
            console.log(res)
            console.log("term and location sent")
            console.log(res.data[1].image_url)
        })
        .catch((err) => {
            console.log(err)
            console.log("error occured")
        })
    }

    return (
        <div style={{width:"100vw"}}>
            <div className="search-form">
            <img
              className="mx-auto h-12 w-auto"
              style={{width:"2rem", height:"4rem"}}
              src="https://i.imgur.com/vEOmfZ3.png"
              alt="Workflow"
            />
                <form onSubmit={searchHandler} className="rounded-md shadow-sm -space-y-px">
            <button className="btn btn-danger"><Link style={{color:"white",textDecoration:"none", fontSize:"14px"}} to={'/api/logout'}>Logout</Link></button>
            <button className="btn btn-success" style={{marginLeft:"15px", fontSize:"14px"}}><Link style={{color:"white",textDecoration:"none"}} to={'/api/posts/new'}>New Post</Link></button>
            <button className="btn btn-dark" style={{marginLeft:"15px", fontSize:"14px"}}><Link style={{color:"white",textDecoration:"none"}} to={'/api/posts/'}>Recent Posts</Link></button>
                    <div className="search-form-items">
                    <label className="sr-only">Food item:</label>
                    <input type="text" value={term} 
                    onChange={(e) => {setTerm(e.target.value)}}
                    placeholder="Food Item"
                    className="h-8 w-21 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"></input>
                    <label className="sr-only">Location:</label>
                    <input type="text" 
                    value={location} 
                    onChange={(e) => {setLocation(e.target.value)}}
                    placeholder="Location"
                    style={{marginLeft: "10px"}} 
                    className="h-8 w-21 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"></input>
                    <input type="submit" value="Search" style={{marginLeft: "10px"}} 
                    className="group relative w-20 flex justify-center py-2 px-4 border 
                    border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 
                    hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
                    focus:ring-indigo-500"/>
                    </div>
                </form>
            </div>
                <div>
                <Images  photos = {photos} setPhotos = {setPhotos} postData = {postData}/>
            </div>
        </div>

    )
}

export default Search;