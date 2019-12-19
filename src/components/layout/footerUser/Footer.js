import React, {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import "./Footer.scss";

const Footer = () => {
    const {isLogged}= useContext(AuthContext);

    return(
        isLogged ?
                <footer>
                    <div className="container text-center">
                        <a href="https://www.facebook.com/bootsnipp">
                            <i id="social-fb" className="fa fa-facebook-square fa-3x social"></i>
                        </a>
                        <a href="https://twitter.com/bootsnipp">
                            <i id="social-tw" className="fa fa-twitter-square fa-3x social"></i>
                        </a>
                        <a href="https://plus.google.com/+Bootsnipp-page">
                            <i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i>
                        </a>
                        <a href="mailto:bootsnipp@gmail.com">
                            <i id="social-em" className="fa fa-envelope-square fa-3x social"></i>
                        </a>
                    </div>
                </footer>
            : <div></div>


    );

}
export default Footer;