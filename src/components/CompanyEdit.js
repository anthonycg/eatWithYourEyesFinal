import react, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const CompanyEdit = (props) => {
    const [companyDescription, setCompanyDesciption] = useState();
    const [companyAddress, setCompanyAddress] = useState();
    const [companyCity, setCompanyCity] = useState();
    const [companyState, setCompanyState] = useState();

    let config = {
        //added withCredentials to config variable, now i see the cookie in the application tab of inspect!
        withCredentials: true,
        headers: {
        'Content-Type': 'application/json',
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/companies/"+companyId, {}, config)
        .then(
            setCompanyName(res.data.companyName)
        )
        .catch(
            err => console.log(err)
        )
        }
    )

    const EditHandler = (e) => {
        axios.post("http://localhost:8000/api/companies"+companyId, {
        companyName:companyName,
        companyDescription: companyDescription,
        companyAddress: companyAddress,
        companyCity: companyCity,
        companyState: companyState
        }, config)
        .then()
    }
}