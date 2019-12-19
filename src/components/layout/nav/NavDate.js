import React from "react";
import lion from "../../../images/lion-715852_960_720.jpeg";
import './Navbar.scss';
import NavLink from "./NavLink";


const NavDate = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">
                <img src={lion} alt="icone" style={{width: "50px", height: "50px"}}/>
            </a>
            <span className="title-navbar"
                  style={{fontWeight: "bold", fontFamily: "Girassol, cursive", fontSize: "30px"}}>LION NOUS</span>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <NavLink />
            </div>
        </nav>
    );
}
export default NavDate;