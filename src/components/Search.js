import React, { useState } from "react";
import axios from 'axios';
import Images from "./Images";
import { useContext } from "react";
import photoContext from "../views/Main"
import "../Search.css"
import {Link} from "react-router-dom";

const Search = (props) => {
    const {getImages, photos, setPhotos, companyInfo, setCompanyInfo} = props;
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");

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
        <div>
            <button className="btn btn-danger"><Link style={{color:"white",textDecoration:"none"}} to={'/api/logout'}>Logout</Link></button>
            <button className="btn btn-success" style={{marginLeft:"15px"}}><Link style={{color:"white",textDecoration:"none"}} to={'/api/posts/new'}>New Post</Link></button>
            <div className="search-form">
                <form onSubmit={searchHandler} >
                    <div className="search-form-items">
                    <label>Food item:</label>
                    <input type="text" value={term} onChange={(e) => {setTerm(e.target.value)}}></input>
                    <label>Location:</label>
                    <input type="text" value={location} onChange={(e) => {setLocation(e.target.value)}}></input>
                    <input type="submit" value="Search" style={{marginLeft: "10px"}} className="btn btn-primary"/>
                    </div>
                </form>
            </div>
                <div>
                <Images photos = {photos} setPhotos = {setPhotos}/>
            </div>
        </div>

    )
}

export default Search;