import React, { useState } from "react";
import axios from 'axios';
import Images from "./Images";
import { useContext } from "react";
import photoContext from "../views/Main"
import "../Search.css"

const Search = (props) => {
    const context = useContext(photoContext);
    const {getImages, photos, setPhotos} = props;
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");

    const searchHandler = (e) => { 
        e.preventDefault()

        let config = {
            headers: {
               'Content-Type': 'application/json',
            },
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
            <div className="search-form">
                <form onSubmit={searchHandler} >
                    <div className="search-form-items">
                    <label>Food item:</label>
                    <input type="text" value={term} onChange={(e) => {setTerm(e.target.value)}}></input>
                    <label>Location:</label>
                    <input type="text" value={location} onChange={(e) => {setLocation(e.target.value)}}></input>
                    <input type="submit" value="Search" className="search-button"/>
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