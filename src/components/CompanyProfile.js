import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, useLocation } from 'react-router-dom';

const CompanyProfile = (props) => {
    const location = useLocation();
    // const {companyId} = props;
    // const {companyId} = useParams()
    const [companyData, setCompanyData] = useState();
    const [companyName] = useState("");
    const [modal, setModal] = useState({isOpen: false, imageId: null});
    // set Modal toggling
    const toggleModal = React.useCallback(
        (index) => () => {
            console.log(index)
            setModal({ isOpen: true, imageId: index });
        }, []);
    
    const closeModal =() => {
        setModal({ isOpen: false, imageId: null });
    }
    //Get company data from backend immediately
    console.log(window.sessionStorage)
    useEffect((companyId) => {
        
        axios.get('http://localhost:8000/api/companies/'+location.state.companyId)
        .then((res) => 
        {
            setCompanyData(res.data.companyName)
            window.sessionStorage.setItem("companyName", JSON.stringify(res.data.companyName));
            window.sessionStorage.setItem("companyEmail", JSON.stringify(res.data.email));
            window.sessionStorage.setItem("companyId", JSON.stringify(res.data._id));
            setCompanyData(JSON.parse(window.sessionStorage.getItem("companyDataStuff",companyData)));
            console.log(window.sessionStorage)
            console.log(res)
    })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>{JSON.parse(sessionStorage.getItem("companyName"))}</h1>
            <h1>{JSON.parse(sessionStorage.getItem("companyEmail"))}</h1>
        </div>

        // <div className="container" style={{justifyContent: "center"}}>
        //     <div className="image-gallery">
        //         {photos.map((photo, index) => {
        //             if (modal.isOpen === false) {
        //                 return (<a href="#"><button key={index} style={{cursor: 'pointer'}} onClick={toggleModal(index)}>
        //                         <img key={index} src={photo.image_url} 
        //                         alt="food item within a grid of other food items">
        //                         </img></button></a>)
        //             } else {
        //             return <div className="modalish" >
        //                 <a href="#"><div onClick={closeModal} className="overlay"></div></a>
        //                     <div className="modalish-content">
        //                         <h2 key={index}>{photos[modal.imageId].name}</h2>
        //                             <img src={photos[modal.imageId].image_url} alt="single food item"></img>

        //                         <input type="submit" value="X" className="close-modalish" onClick={closeModal}></input>
        //             </div>
        //                     </div>
        //             }

                            
        //                 }
        //             )
        //         }
        //     </div>
        // </div>
    )
}

export default CompanyProfile;