import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();
    const {authorList, setAuthorList} = props;
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:8000/api/posts/" + id)
        .then(
            (res) => {
                console.log(res.data)
                setItemName(res.data.itemName)
                setDescription(res.data.description)
                setCompanyWebsite(res.data.companyWebsite)
            }
        )
        .catch(err=> {console.log(err)})
    }, [])

    const updatePost = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/posts/" + id, {
            itemName,
            description,
        })
        .then(res => {
            console.log(res);
            navigate("/api/posts");
        })
        .catch((err)=>{
            console.log(err.response.data.err.errors)
            const errorResponse = err.response.data.err.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }

    return (
        <div className="container">

            <form onSubmit={updatePost}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            {errors.name}
            <h2>Edit a Post</h2>
            <label>Name</label>
            <input type="text" name="name" 
            value={itemName}
            onChange={(e) => {setItemName(e.target.value)}}></input>
            <label style={{marginTop: "13px"}}>Description</label>
            <input type="text" name="name" 
            value={description}
            onChange={(e) => {setDescription(e.target.value)}}></input>
            <label style={{marginTop: "13px"}}>Link:</label>
            <input type="text" name="name" 
            value={companyWebsite}
            onChange={(e) => {setCompanyWebsite(e.target.value)}}></input>
            <input className="btn btn-primary" style={{marginTop: "10px"}} type="submit" />
            <div style={{marginTop: "10px"}}>
                <Link  to="/api/posts">Back to all posts</Link>
            </div>
            </form>
        </div>
    )
}

export default Update;