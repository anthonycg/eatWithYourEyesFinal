import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AllPosts = (props) => {
    const [postData, setPostData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/posts")
        .then((res) => 
        {setPostData(res.data)
            postData.reverse()
        console.log(res.data[0].itemName)})
        .catch(err => console.log(err))
    }, [])

    const deletePost = (postId) => {
        axios.delete("http://localhost:8000/api/posts/"+postId)
        .then(res => {
            console.log(res)
            navigate("/api/posts/new");
            
        })
        .catch(err=> console.log(err))
    }

    return (
        <div>
            <h2>All Posts</h2>
        {
            postData.map((post, index) => {
                
                console.log(post)
                console.log(index)
                return (
                        <div className="container" style={{display: "flex", justifyContent:"center", alignItems:"center"}}>
                        <div className="card" style={{width: "28rem"}}>
                        <img className="card-img-top" src={post.image_url} alt="food item in card"></img>
                            <div className="card-body">
                                <h5 className="card-title">{post.createdBy.companyName}</h5>
                                <p className="card-text">{post.itemName}</p>
                                <p className="card-text">{post.description}</p>
                                {post.companyWebsite ? <p><a className="btn btn-primary" href={post.companyWebsite}>Go to website</a></p> : ""}
                                <button className="btn btn-danger" onClick={(e) => {deletePost(post._id)}}>Delete</button>
                                <Link style={{marginLeft: "10px"}} className="btn btn-secondary" to={'/api/posts/'+post._id}>Edit</Link>
                                
                            </div>
                        </div>
                    </div>
                    
                )
            })
        }
        </div>

    )
}

export default AllPosts; 