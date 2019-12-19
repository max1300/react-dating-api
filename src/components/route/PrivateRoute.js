import React, {useContext} from "react";
import { Route, Redirect} from "react-router-dom";
import AuthContext from "../context/AuthContext";
import UserContext from "../context/UserContext";

const PrivateRoute = ({ children, ...rest }) => {
    const {isLogged}= useContext(AuthContext);
    const {username}= useContext(UserContext);

    return (
        <Route
            {...rest}
                render={({ location }) =>
                isLogged && username ? (
                children
                ) : (
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
                />
                )
            }
        />
    );
}
export default PrivateRoute;