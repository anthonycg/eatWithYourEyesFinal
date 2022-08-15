import React, { useState } from "react";
import axios from 'axios';
import "../Images.css"
import {IonIcon} from "@ionic/react";
import bxsFoodMenu from "ionicons";
import Details from "./Details";
import { Link } from "react-router-dom";



const Images = (props) => {
    const { photos, setPhotos} = props
    const [modal, setModal] = useState({isOpen: false, imageId: null});
    // setModal(!modal);
    
    const toggleModal = React.useCallback(
        
        (index) => () => {
            console.log(index)
            setModal({ isOpen: true, imageId: index });
        //   axios.get("https://cors-anywhere.herokuapp.com/http://opentable.herokuapp.com/api/cities")
        //   .then( (res) => {
        //     console.log(res)
        // })
        // .catch((err) => {
        //     console.log(err)
        //     console.log("error occured")
        // }) 
        },
        []
      );
    
    const closeModal =() => {
        setModal({ isOpen: false, imageId: null });
      }

    return (
        <div className="container" style={{justifyContent: "center"}}>
            <div className="image-gallery">
                {photos.map((photo, index) => {
                    if (modal.isOpen === false) {
                        return (<a href="#"><button key={index} style={{cursor: 'pointer'}} onClick={toggleModal(index)}>
                                <img key={index} src={photo.image_url} 
                                alt="food item within a grid of other food items">
                                </img></button></a>)
                    } else {
                    return <div className="modalish" >
                        <a href="#"><div onClick={closeModal} className="overlay"></div></a>
                            <div className="modalish-content">
                                <h2 key={index}>{photos[modal.imageId].name}</h2>
                                    <img src={photos[modal.imageId].image_url} alt="single food item"></img>

                                <input type="submit" value="X" className="close-modalish" onClick={closeModal}></input>
                    </div>
                            </div>
                    }

                            
                        }
                    )
                }
            </div>
        </div>
    )
}



        // <div className="container">
        //         <div className="image-gallery">
        //             {photos.map((photo, index) => {
        //                 return (
                        //     <button onClick={toggleModal} className="btn-modal">
                        //     Open
                        //   </button>
                    
                        //   {if (modal) {
                        //     <div className="modal">
                        //       <div onClick={toggleModal} className="overlay"></div>
                        //       <div className="modal-content">
                        //         <h2>Hello Modal</h2>
                        //         <p>
                        //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                        //           perferendis suscipit officia recusandae, eveniet quaerat assumenda
                        //           id fugit, dignissimos maxime non natus placeat illo iusto!
                        //           Sapiente dolorum id maiores dolores? Illum pariatur possimus
                        //           quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                        //           placeat tempora vitae enim incidunt porro fuga ea.
                        //         </p>
                        //         <button className="close-modal" onClick={toggleModal}>
                        //           CLOSE
                        //         </button>
                        //       </div>
                        //     </div>
                        //   } else {
                        //       <div className="image-gallery">
                        //           {/* <Link to="/details"> */}
                        //           <button onClick={toggleModal} key={index} className="image-1">
                        //               <img src={photo.image_url} 
                        //               alt="food item pic"></img>
                        //           </button>
                        //           {/* </Link> */}
                        //       </div>
                        //   }})})}


export default Images;