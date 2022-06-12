import React from "react";
import {useParams} from 'react-router-dom'
import Error from "./error";

export default function Contact() {

    const {lang} = useParams();

    console.log(lang);
    if (lang === "us") {
        return (
            <div>ADDRESS: "/contact/us"</div>
        )
    }
    if (lang === "pl") {
        return (
            <div>ADDRESS: "/contact/pl"</div>
        )
    }
    if (lang === "de") {
        return (
            <div>ADDRESS: "/contact/de"</div>
        )
    }
    if (lang === undefined) {
        return (
            <div>ADDRESS: "/contact"</div>
        )
    }
    else{
        return (
            <Error/>
        )
    }
}