import React from "react";
import {useState} from "react";
import axios from "axios";

const NewPost = () => {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImage_url] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");

    let config = {
        //added withCredentials to config variable, now i see the cookie in the application tab of inspect!
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
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
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div >
            <form onSubmit={handleNewPost}>
                <label>Item Name:</label>
                <input value={itemName} onChange={(e) => setItemName(e.target.value)}></input>
                <label>Description:</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)}></input>
                <label>Image URL:</label>
                <input value={image_url} onChange={(e) => setImage_url(e.target.value)}></input>
                <label>Order Now Link:</label>
                <input value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)}></input>
                <input type="submit"></input>
            </form>

        </div>
    )
}

export default NewPost;