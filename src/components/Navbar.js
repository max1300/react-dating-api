import React from "react";
import lion from "../images/lion-715852_960_720.jpeg";
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/"><img src={lion} alt="icone" style={{width:"50px", height:"50px"}}/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <span className="title-navbar" style={{fontWeight:"bold", fontFamily: "Girassol, cursive", fontSize:"30px"}}>LION NOUS</span>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Accueil</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Connexion</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;