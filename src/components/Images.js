import React, { useState } from "react";
import axios from 'axios';
import "../Images.css"
import {IonIcon} from "@ionic/react";
import bxsFoodMenu from "ionicons";
import Details from "./Details";
import { Link } from "react-router-dom";



const Images = (props) => {
    const { photos, setPhotos} = props

    return (
        <div className="container">
                <div className="image-gallery">
                    {photos.map((photo, index) => {
                        return (
                            <div>
                                
                                <div className="image-gallery">
                                    <Link to="/details">
                                    <button key={index} className="image-1">
                                        <img src={photo.image_url} 
                                        alt="food item pic"></img>
                                    </button>
                                    </Link>
                                </div>
                                <div>
                                    <Details currentImage={photos}/>
                                </div>
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