import React from "react";
import {useState} from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const NewPost = () => {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImage_url] = useState();
    const [companyWebsite, setCompanyWebsite] = useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("")

    let config = {
        //added withCredentials to config variable, now i see the cookie in the application tab of inspect!
        withCredentials: true,
        headers: {
        'Content-Type': 'multipart/form-data',

        }
    }
    const fileSelectedHandler = (e) => {
            console.log(e.target.files[0])
            setImage_url(e.target.files[0])
            const base64String = btoa(String.fromCharCode(...new Uint8Array(image_url)));
    }

    // fileUploadHandler = () => {
    // Will use this function when I add upload button for file only.
    // }

    const handleNewPost = (e) => {
        const fd = new FormData();
        fd.append('itemName', itemName)
        fd.append('description', description)
        fd.append('image_url', image_url)
        fd.append('companyWebsite', companyWebsite)

        e.preventDefault()
        axios.post("http://localhost:8000/api/posts/new", fd,
        // {itemName:itemName,
        // description: description,
        // image_url: image_url,
        // companyWebsite: companyWebsite}, 
        config)
        .then((res) => {
            console.log(res)
            navigate("/api/posts")
        })
        .catch((err) => {
            console.log(err)
            navigate("/api/login")
            // setErrorMessage(err.response.data.message)
        })
    }

    return (
        <div className="container">
                <h2>New Post</h2>
            <h5 className="error-text" style={{color:"red"}}>{errorMessage ? errorMessage: ""}</h5>
            <form onSubmit={handleNewPost}>
                <label>Item Name:</label>
                <input value={itemName} onChange={(e) => setItemName(e.target.value)}></input>
                <label>Description:</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <label>Image URL:</label>
                <input type="file" accept="image/*" name='image_url' onChange={fileSelectedHandler}></input>
                <label>Order Now Link:</label>
                <input value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)}></input>
                <input type="submit"></input>
                <div>
                <Link to="/api/posts">All Posts</Link>
                </div>
            </form>



        </div>
    )
}

export default NewPost;