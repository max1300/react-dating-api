import React, {useContext} from "react";
import * as ROUTES from "../../route/ConstantRoute";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import './Navbar.scss';

const NavLink = () => {
    const {isLogged, updateLogged}= useContext(AuthContext);

    const LogOut = (e) => {
        localStorage.removeItem("tokenUser");
        updateLogged(false);
    }

    return (
    <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link className="nav-link" to={ROUTES.HOME}>Accueil</Link>
        </li>
        {
            isLogged ?
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.HOME} onClick={LogOut}>Deconnexion</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.HOME}>
                            <span className="fa fa-lg">&#xf007;</span>
                        </Link>
                    </li>
                </ul>
                :
                <li className="nav-item">
                    <Link className="nav-link" to={ROUTES.LOGIN}>Connexion</Link>
                </li>
        }
    </ul>
    );
}
export default NavLink;