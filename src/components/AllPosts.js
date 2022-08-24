import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AllPosts = (props) => {
    const [postData, setPostData] = useState([]);
    const navigate = useNavigate();
    const [base64String, setBase64String] = useState("");
    useEffect(() => {
        axios.get("http://localhost:8000/api/posts")
        .then((res) => 
        {
            
            setPostData(res.data)
            postData.reverse()
        console.log(res.data[0].itemName)})
        .catch(err => console.log(err))
    }, [])

    const deletePost = (postId, imageNameInS3) => {
        axios.delete("http://localhost:8000/api/posts/"+postId, {
            headers: {
            },
            data: {
              source: imageNameInS3
            }})
        .then(res => {
            console.log(res)
            console.log(imageNameInS3)
            // navigate("/api/posts/new");
            
        })
        .catch(err=> console.log(err))
    }

    const toCompanyProfile = (companyId) => {
            
            navigate("/api/posts/new");

    }

    return (
        <div>
            <div className="rounded-md shadow-sm -space-y-px">
            <h2>All Posts</h2>
            <Link style={{marginLeft: "10px"}} className="btn btn-success" to={'/'}>Back to Search</Link>
            <Link style={{marginLeft: "10px"}} className="btn btn-info" to={'/api/posts/new'}>New Post</Link>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", margin: "1rem"}}>
                        {
            postData.map((post, index) => {
                console.log(post)
                return (
                    <div style={{margin: ".5rem"}}>
                                                <div>
                        <div className="card" style={{width: "28rem"}}>
                        <img className="card-img-top" src={post.image_url} alt="food item in card"></img>
                            <div className="card-body">
                                <Link to={'/api/companies/'+post.createdBy._id}
                                state= {{companyId: post.createdBy._id}}
                                ><h5 className="card-title">{post.createdBy.companyName}</h5></Link>
                                <p className="card-text">{post.itemName}</p>
                                <p className="card-text">{post.description}</p>
                                {post.companyWebsite ? <p><a className="btn btn-primary" href={post.companyWebsite}>Go to website</a></p> : ""}
                                <button className="btn btn-danger" onClick={(e) => {deletePost(post._id, post.imageName)}}>Delete</button>
                                <Link style={{marginLeft: "10px"}} className="btn btn-secondary" to={'/api/posts/'+post._id}>Edit</Link>
                                
                            </div>
                        </div>
                    </div>
                    </div>

                )
            })
        }
            </div>

        </div>

    )
}

export default AllPosts; 