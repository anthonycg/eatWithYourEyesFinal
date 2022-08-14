import react, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

let config = {
    withCredentials: true,
    headers: {
    'Content-Type': 'application/json',
    },
}

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
            axios.post("http://localhost:8000/logout", {}, config)
            .then((res) => {
                console.log(res);
                navigate("/login");
            })
            .catch(err => console.log(err))
    }, []
    )
    
}

export default Logout;