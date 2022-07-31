import React, { useState } from "react";
import axios from 'axios';
import Images from "./Images";



const Search = (props) => {
    const {getImages, photos, setPhotos} = props;
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");

    const searchHandler = (e) => {
        e.preventDefault()

        let config = {
            headers: {
               'Content-Type': 'application/json',
            },
            // params: {
            //     term: "hello",
            //     location: "austin"
            // } 
       }

       let data = {
        term:term, 
        location:location
    }

        axios.post('http://localhost:8000/results1', data, config)
        .then( (res) => {
            setPhotos(res.data)
            console.log(res)
            console.log("term and location sent")
        })
        .catch((err) => {
            console.log(err)
            console.log("error occured")
        })
    }

    return (
        <div>
        <form onSubmit={searchHandler}>
            <label>Food item:</label>
            <input type="text" value={term} onChange={(e) => {setTerm(e.target.value)}}></input>
            <label>Location:</label>
            <input type="text" value={location} onChange={(e) => {setLocation(e.target.value)}}></input>
            <input type="submit" />
        </form>
        <div>
        <Images photos = {photos} setPhotos = {setPhotos}/>
        </div>
        </div>

    )
}

export default Search;