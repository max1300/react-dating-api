import React, {useState} from 'react';
import './App.scss';
import NavDate from "./layout/nav/NavDate";
import Login from "./login/Login";
import { Router, Route, Switch} from "react-router-dom";
import AuthContext from "./context/AuthContext";
import UserContext from "./context/UserContext";
import * as ROUTES from "../components/route/ConstantRoute";
import History from "./utils/History";
import PrivateRoute from "./route/PrivateRoute";
import Footer from "./layout/footerUser/Footer";
import Users from "./User/Users";

const App = () => {
    const [isLogged, setLogged] = useState(localStorage.getItem('tokenUser') !== null);
    const [username, setUsername] = useState(localStorage.getItem('username') !== null);
    const contextValue = {
        isLogged:isLogged,
        updateLogged:setLogged
    }

    const userValue = {
        username:username,
        updateUsername:setUsername
    }


    return (
        <AuthContext.Provider value={contextValue}>
            <UserContext.Provider value={userValue}>
                <Router history={History}>
                    <NavDate />
                    <div>
                        <Switch>
                            <PrivateRoute path={ROUTES.LOGIN} component={Login}/>
                            <Route path={ROUTES.USERLIST} component={Users}/>
                            <PrivateRoute path={ROUTES.HOME}></PrivateRoute>

                        </Switch>
                    </div>
                </Router>
                <Footer/>
            </UserContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
