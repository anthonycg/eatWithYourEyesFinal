import React, { useState } from "react";
import axios from 'axios';
import {IonIcon} from "@ionic/react";



const Search = (props) => {
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");

    const searchHandler = async (e) => {
        e.preventDefault()

        let config = {
            headers: {
               'Content-Type': 'application/json',
            } 
       }

        await axios.post('http://localhost:8000/results1', 
        JSON.stringify({
            term:term, 
            location:location}), config)
        .then( (res) => {
            console.log(res)
            console.log("term and location sent")
        })
        .catch((err) => {
            console.log(err)
            console.log("error occured")
        })
    }

    return (
        <form onSubmit={searchHandler}>
            <label>Food item:</label>
            <input type="text" value={term}onChange={(e) => {setTerm(e.target.value)}}></input>
            <label>Location:</label>
            <input type="text" value={location} onChange={(e) => {setLocation(e.target.value)}}></input>
        </form>
    )
}

export default Search;