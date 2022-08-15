import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
    let {companyInfo, setCompanyInfo, getCompanyInfo} = props;
    // let companyName = props.companyName;
    getCompanyInfo()
    console.log(props.companyInfo)
    if (companyInfo === "") {
        companyInfo = "Guest"
    }
    return (
        <div>
            <h1>Hello, {} ! </h1>
            <Link to="/api/posts/new">Create New Post</Link>
        </div>
    )
}

export default Header;