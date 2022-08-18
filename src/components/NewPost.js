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

    const handleNewPost = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/posts/new", 
        {itemName:itemName,
        description: description,
        image_url: image_url,
        companyWebsite: companyWebsite}, 
        config)
        .then((res) => {
            console.log(res)
            navigate("/api/posts")
        })
        .catch((err) => {
            // console.log(err)
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
                <input type="file" name='image_url' accept="image/*" onChange={(e) => setImage_url(e.target.files[0])}></input>
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