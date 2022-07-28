import React, { useState } from "react";
import axios from 'axios';
import "../Images.css"
import {IonIcon} from "@ionic/react";
import bxsFoodMenu from "ionicons";



const Images = (props) => {
    const [term, setTerm] = useState("");
    const [location, setLocation] = useState("");
    const [photos, setPhotos] = useState([]);

    const getImages = (e) => {
        e.preventDefault()

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
        <div className="container">
            <form onSubmit={getImages}>
                <div className="image-gallery">
                    {photos.map((photo, index) => {
                        return (<div className="image-gallery">
                            <a className="image-1" href="https://google.com" key={index}>
                                {/* <IonIcon icon={bsxFoodMenu}/> */}
                                <img src={photo.image_url} 
                                alt="food item pic"></img>
                            </a>
                        </div>
                    ) 
                }
            )
        }
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Images;