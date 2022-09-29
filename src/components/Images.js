import React, { useState } from "react";
import axios from "axios";
import "../Images.css";
import { IonIcon } from "@ionic/react";
import bxsFoodMenu from "ionicons";
import Details from "./Details";
import { Link } from "react-router-dom";
import GoogleMapComponent from "./GoogleMap";



const Images = (props) => {
    const { photos, setPhotos, postData } = props;
    const [modal, setModal] = useState({ isOpen: false, imageId: null });
    // setModal(!modal);

    const toggleModal = React.useCallback(
        (index, photoID, companyPostPhotoID) => () => {
            // console.log(index);
            // console.log(photoID)
            // console.log(companyPostPhotoID)
            setModal({ isOpen: true, imageId: index });
        },
        []
    );

    const closeModal = () => {
        setModal({ isOpen: false, imageId: null });
    };

    return (
        // getting data from company posts
        <div style={{ justifyContent: "center" }}>
            <div className="image-gallery" style={{ margin: "0rem 1.5rem" }}>
                {postData.map((postPhoto, index, _id) => {
                    let companyPostPhotoID = postData._id
                    if (modal.isOpen === false) {
                        return (
                            
                                <button
                                    key={companyPostPhotoID}
                                    style={{ cursor: "pointer" }}
                                    onClick={toggleModal(index, companyPostPhotoID)}
                                >
                                    <img
                                        key={companyPostPhotoID}
                                        src={postPhoto.image_url}
                                        alt="food item within a grid of other food items"
                                    ></img>
                                </button>
                            
                        );
                    } else {
                        return (
                            <div className="modalish">
                                <a href="#">
                                    <div
                                        onClick={closeModal}
                                        className="overlay"
                                    ></div>
                                </a>
                                <div className="modalish-content">
                                    <h2 key={index}>{postData.companyName}</h2>
                                    <img
                                        src={postData.image_url}
                                        style={{
                                            width: "50rem",
                                            height: "30rem",
                                        }}
                                        alt="single food item"
                                    ></img>

                                    <input
                                        type="submit"
                                        value="X"
                                        className="close-modalish"
                                        onClick={closeModal}
                                    ></input>
                                </div>
                            </div>
                        );
                    }
                })}
                {/* getting food images from Yelp */}
                {photos.map((photo, index) => {
                    let photoID = photo.id;
                    if (modal.isOpen === false) {
                        return (
                            <a href="#">
                                <button
                                    key={photoID}
                                    style={{ cursor: "pointer" }}
                                    onClick={toggleModal(index, photoID)}
                                >
                                    <img
                                        key={photoID}
                                        src={photo.image_url}
                                        alt="food item within a grid of other food items"
                                    ></img>
                                </button>
                            </a>
                        );
                    } else {
                        return (
                            <div className="modalish">
                                <a href="#">
                                    <div
                                        onClick={closeModal}
                                        className="overlay"
                                    ></div>
                                </a>
                                <div className="modalish-content">
                                    <h2 key={photoID}>
                                        {photos[modal.imageId].name}
                                    </h2>
                                    <a
                                        href={
                                            "tel:" +
                                            photos[modal.imageId].display_phone
                                        }
                                    >
                                        <p key={index}>
                                            {
                                                photos[modal.imageId]
                                                    .display_phone
                                            }
                                        </p>
                                    </a>
                                    <h6>Get Directions:</h6>
                                    <a
                                        href={
                                            "https://www.yelp.com/map/" +
                                            photos[modal.imageId].alias
                                        }
                                    >
                                        <p key={index}>
                                            {
                                                photos[modal.imageId].location
                                                    .display_address[0]
                                            }{" "}
                                            {
                                                photos[modal.imageId].location
                                                    .display_address[1]
                                            }
                                        </p>
                                    </a>
                                    <GoogleMapComponent
                                        lat={
                                            photos[modal.imageId].coordinates
                                                .latitude
                                        }
                                        long={
                                            photos[modal.imageId].coordinates
                                                .longitude
                                        }
                                    />
                                    <img
                                        src={photos[modal.imageId].image_url}
                                        style={{
                                            width: "50rem",
                                            height: "30rem",
                                            marginTop:"1rem"
                                        }}
                                        alt="single food item"
                                    ></img>
                                    <input
                                        type="submit"
                                        value="X"
                                        className="close-modalish"
                                        onClick={closeModal}
                                    ></input>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Images;
