import React, {useState} from 'react';
import './App.scss';
import NavDate from "./layout/nav/NavDate";
import Login from "./login/Login";
import { Router, Route, Switch} from "react-router-dom";
import UserContext from "./context/AuthContext";
import * as ROUTES from "../components/route/ConstantRoute";
import History from "./utils/History";
import PrivateRoute from "./route/PrivateRoute";

const App = () => {
    const [isLogged, setLogged] = useState(localStorage.getItem('tokenUser') !== null);
    const contextValue = {
        isLogged:isLogged,
        updateLogged:setLogged
    }


    return (
        <UserContext.Provider value={contextValue}>
            <Router history={History}>
                <NavDate />
                <div>
                    <Switch>
                        <Route path={ROUTES.LOGIN} component={Login}/>
                        <PrivateRoute path={ROUTES.HOME}></PrivateRoute>
                    </Switch>
                </div>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
