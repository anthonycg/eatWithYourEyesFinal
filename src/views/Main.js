import React from "react";
import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "../components/Search";
import Images from "../components/Images";
import Details from "../components/Details";


const Main = (props) => {
    const [photos, setPhotos] = useState([]);

        const getImages = (e) => {

        axios.get('http://localhost:8000/results1')
        .then( (res) => {
            setPhotos(res.data)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <Search photos = {photos} setPhotos = {setPhotos} getImages ={getImages}/>
            {/* <Images photos = {photos} setPhotos = {setPhotos} getImages ={getImages} /> */}
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/:id" element={<Details/>} photos = {photos} setPhotos = {setPhotos}/>
                </Routes>
            </BrowserRouter> */}
        </div>
    )

}

export default Main;