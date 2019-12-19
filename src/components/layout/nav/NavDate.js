import React from "react";
import lion from "../../../images/lion-715852_960_720.jpeg";
import './Navbar.scss';
import NavLink from "./NavLink";


const NavDate = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
                <img src={lion} alt="icone"/>
            </a>
            <span className="title-navbar">LION NOUS</span>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <NavLink />
            </div>
        </nav>
    );
}
export default NavDate;