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

    // return (
    //     <div>
            
    //         <h1>{JSON.parse(sessionStorage.getItem("companyName"))}</h1>
    //         <h1>{JSON.parse(sessionStorage.getItem("companyEmail"))}</h1>
    //     </div>

    //     // <div className="container" style={{justifyContent: "center"}}>
    //     //     <div className="image-gallery">
    //     //         {photos.map((photo, index) => {
    //     //             if (modal.isOpen === false) {
    //     //                 return (<a href="#"><button key={index} style={{cursor: 'pointer'}} onClick={toggleModal(index)}>
    //     //                         <img key={index} src={photo.image_url} 
    //     //                         alt="food item within a grid of other food items">
    //     //                         </img></button></a>)
    //     //             } else {
    //     //             return <div className="modalish" >
    //     //                 <a href="#"><div onClick={closeModal} className="overlay"></div></a>
    //     //                     <div className="modalish-content">
    //     //                         <h2 key={index}>{photos[modal.imageId].name}</h2>
    //     //                             <img src={photos[modal.imageId].image_url} alt="single food item"></img>

    //     //                         <input type="submit" value="X" className="close-modalish" onClick={closeModal}></input>
    //     //             </div>
    //     //                     </div>
    //     //             }

                            
    //     //                 }
    //     //             )
    //     //         }
    //     //     </div>
    //     // </div>
    // )
return (
<div>

<div className="profile-page">
  <div className="relative block h-500-px">
    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{backgroundColor: "blue"}}>
      <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: "translateZ(0px)"}}>
      <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </div>
  <div className="relative py-16 bg-blueGray-200">
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"></img>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Connect
                </button>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Jenna Stones
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes,
                  performs and records all of his own music, giving it a
                  warm, intimate feel with a solid groove structure. An
                  artist of considerable range.
                </p>
                <a href="#pablo" className="font-normal text-pink-500">Show more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
  </div>
</div>
</div>

)
}

export default CompanyProfile;