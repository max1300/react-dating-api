import React, {useContext} from "react";
import * as ROUTES from "../../route/ConstantRoute";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import './Navbar.scss';

const NavLink = () => {
    const {isLogged, updateLogged}= useContext(AuthContext);

    const LogOut = (e) => {
        localStorage.clear();
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
                    <li>
                    <Link className="nav-link" to={ROUTES.USERLIST}>Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.HOME}>
                            <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle"
                                    type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"
                                    style={{backgroundColor:"transparent", border:"none"}}>
                                <span className="fa fa-lg">&#xf007;</span></button>
                                <div className="dropdown-menu dropdown-menu-md-right text-center" aria-labelledby="dropdownMenuButton">
                                    <Link className="dropdown-item" to="#">Compte</Link>
                                    <Link className="dropdown-item" to="#">Messages</Link>
                                    <Link className="dropdown-item" to={ROUTES.HOME} onClick={LogOut}>Deconnexion</Link>
                                </div>
                            </div>
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