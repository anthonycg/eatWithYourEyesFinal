import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, useLocation, Link } from 'react-router-dom';


const CompanyProfile = (props) => {
    const location = useLocation();
    const [companyName, setCompanyName] =  useState("");
    const [email, setEmail] = useState("");
    const [postsCreated, setPostsCreated] = useState();
    const [companyCity, setCompanyCity] = useState("");
    const [companyState, setCompanyState] = useState("");
    const [companyAddress, setCompanyAddress] = useState("");
    const [companyDescription, setCompanyDesciption] = useState("");
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState("");
    const [companyData, setCompanyData] = useState();
    const [companyProfileImage, setCompanyProfileImage] = useState();
    const [companyBannerImage, setCompanyBannerImage] = useState();
    const backgroundIMG = 'https://i.imgur.com/41yziMZ.jpeg';
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
    // console.log(location.state.companyId)
    useEffect((companyId) => {
        console.log(location.state)
        location.state === null || undefined || "" ? axios.get('http://localhost:8000/api/companies/'+JSON.parse(sessionStorage.getItem("companyId"))) : axios.get('http://localhost:8000/api/companies/'+location.state.companyId)
        .then((res) => 
        {
            setCompanyData(res.data.companyName)
            console.log(res)
            setCompanyName(res.data.companyName)
            setEmail(res.data.email)
            setPostsCreated(res.data.postsCreated)
            setCompanyCity(res.data.companyCity)
            setCompanyState(res.data.companyState)
            setCompanyAddress(res.data.companyAddress)
            setCompanyDesciption(res.data.companyDescription)
            setCompanyPhoneNumber(res.data.companyPhoneNumber)
            setCompanyProfileImage(res.data.companyProfileImage);
            setCompanyBannerImage(res.data.companyBannerImage);
            window.sessionStorage.setItem("companyName", JSON.stringify(res.data.companyName));
            window.sessionStorage.setItem("companyEmail", JSON.stringify(res.data.email));
            window.sessionStorage.setItem("companyId", JSON.stringify(res.data._id));
            // window.sessionStorage.setItem("companyCity", JSON.stringify(res.data.companyCity));
            //2. get all other company data items to populate on profile
            setCompanyData(JSON.parse(window.sessionStorage.getItem("companyDataStuff",companyData)));
            console.log(window.sessionStorage)
            console.log(res)
    })
        .catch(err => console.log(err))
    }, [])

    return (
      <div style={{width: "100vw",}} className="rounded-md shadow-sm -space-y-px">
<div className="rounded-md shadow-sm -space-y-px">
<h2 >{JSON.parse(sessionStorage.getItem("companyName"))}'s Profile</h2>
<button className="btn btn-danger"><Link style={{color:"white",textDecoration:"none", fontSize:"14px"}} to={'/api/logout'}>Logout</Link></button>
<button className="btn btn-success" style={{marginLeft:"15px", fontSize:"14px"}}><Link style={{color:"white",textDecoration:"none"}} to={'/api/posts/new'}>New Post</Link></button>
<button className="btn btn-dark" style={{marginLeft:"15px", fontSize:"14px"}}><Link style={{color:"white",textDecoration:"none"}} to={'/api/posts/'}>Recent Posts</Link></button>
</div>
<div className="profile-page" style={{width: "100vw",}}>
  <div className="relative block h-500-px" style={{width: "100vw",}}>
    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{height:"15vh", width: "100vw", backgroundImage: `url(${backgroundIMG})`}}>
      <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{transform: "translateZ(0px)", width: "100vw",}}>
      <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0" style={{width: "100vw"}}>
        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100" style={{width: "100vw",}}></polygon>
      </svg>
    </div>
  </div>
  <div className="relative py-16 bg-blueGray-200" style={{width: "100vw",}}>
    <div style={{width: "100vw",}}>

        <div style={{width: "100vw",}}>
          <div style={{width: "100vw",}}>
            <div  style={{display:"flex", justifyContent:"center",width: "100vw",}}>
              <div  style={{ display:"flex", justifyContent:"center", width:"5vw", height:"5vh"}}>
                <img alt="..." src="https://anotherbrokenegg.com/sites/default/files/styles/popup_image/public/2022-08/another-broken-egg-cafe-seasonal-selections-blackened-mahi-benedict.jpg?itok=zheSdQve" 
                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" 
                style={{border:"#3203dd .15rem solid", width:"12vw",height:"12vh"}}></img>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div>
              <Link to={'/api/companies/edit/'+JSON.parse(sessionStorage.getItem("companyId"))}
              state= {{companyId: JSON.parse(sessionStorage.getItem("companyName"))}}
              ><button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-5 ease-linear transition-all duration-150" type="button">
                  Edit
                </button></Link>
              </div>
            </div>
            {/* <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div> */}
            {/* </div> */}
          </div>
          <div className="text-center mt-4" style={{width: "100vw",display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <h3 className="text-4xl font-semibold leading-normal mb-2 mt-2 text-blueGray-700 mb-2">
            {JSON.parse(sessionStorage.getItem("companyName"))}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              {(companyCity && companyState) ? `${companyCity}, ${companyState}`: "no company location listed, yet"}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>{(companyAddress) ? companyAddress: "no company Address listed, yet"}
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>{(companyPhoneNumber) ? companyPhoneNumber: "no company Phone Number listed, yet"}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                {(companyDescription) ? companyDescription: "no company Description listed, yet"}                </p>
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
          
        </div>
      </div>
    </div>
  </div>
</footer>
  </div>
</div>

)
}

export default CompanyProfile;

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