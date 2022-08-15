import React from "react";
import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";
import Search from "../components/Search";
import Images from "../components/Images";
import Details from "../components/Details";
import { createContext } from "react";
import Header from "../components/Header";
import Login from "../components/Login";

const Main = (props) => {
    const {id} = useParams();
    const [photos, setPhotos] = useState([]);
    const [companyInfo, setCompanyInfo] = useState({});
    const [companyName, setCompanyName] = useState("");

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

    const getCompanyInfo = (id) => {
            axios.get("http://localhost:8000/api/companies/"+id)
            .then(res => {
                console.log(res.data);
                setCompanyInfo(res.data);
            })
            .catch(err=> console.log(err))
    }

    return (
        <div>
            {/* <div>
            <button type="button" className="btn btn-primary">Primary</button>
                <Header companyName={companyInfo} setCompanyName={setCompanyInfo} getCompanyInfo={getCompanyInfo}/>
            </div> */}
        <div>
            <Search photos = {photos} setPhotos = {setPhotos} getImages ={getImages} 
            companyInfo={companyInfo} setCompanyInfo={setCompanyInfo} getCompanyInfo={getCompanyInfo}/>
            {/* <Images photos = {photos} setPhotos = {setPhotos} getImages ={getImages} /> */}
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/:id" element={<Details/>} photos = {photos} setPhotos = {setPhotos}/>
                </Routes>
            </BrowserRouter> */}
        </div>
        </div>

    )

}

export default Main;