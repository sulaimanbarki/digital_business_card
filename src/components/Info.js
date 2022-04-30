import React from "react";
import profile from "../images/profile.jpg";

const name = "Muhammad Suliman"

export default function Info() {
    return (
        <div className="info">
            <img className="profile" src={profile} alt="Profile Pic" />
            <h1 className="profile-name m-0">{name}</h1>
            <p className="m-0 mb-2"><i>Full Stack Developer</i></p>
            <a href="mailto:sulaimanbarki@gmail.com" className="btn btn-sm btn-light mr-5"><i className="bi bi-envelope-fill"></i> Email</a>            
            <a href="https://www.linkedin.com/in/sulaiman-barki-a7029b137/" rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary"><i className="bi bi-linkedin"></i> LinkedIn</a>            
        </div>
    );
}