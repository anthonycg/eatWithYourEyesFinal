import React, { useState } from "react";
import axios from 'axios';
import "../Images.css"
import {IonIcon} from "@ionic/react";
import bxsFoodMenu from "ionicons";
import Details from "./Details";
import { Link } from "react-router-dom";



const Images = (props) => {
    const { photos, setPhotos} = props

    // const getImages = (e) => {
    //     e.preventDefault()

    //     axios.get('http://localhost:8000/results1')
    //     .then( (res) => {
    //         setPhotos(res.data)
    //         console.log(res)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    // }
    return (
        <div className="container">
                <div className="image-gallery">
                    {photos.map((photo, index) => {
                        return (
                            <div>
                                
                                <div className="image-gallery">
                                    <Link to={photo.id}>
                                    <button key={index} className="image-1">
                                        <img src={photo.image_url} 
                                        alt="food item pic"></img>
                                    </button>
                                    </Link>
                                </div>
                                    {/* <Details currentImage={photo.image_url}/> */}
                            </div>
                    ) 
                }
            )
        }
                </div>
                {/* <input type="submit" /> */}
        </div>
    )
}

export default Images;