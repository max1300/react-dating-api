import React, {useState} from 'react';
import './App.scss';
import NavDate from "./NavDate";
import Login from "./login/Login";
import { Router, Route, Switch} from "react-router-dom";
import UserContext from "./UserContext";
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
          <NavDate/>
            <Router history={History}>
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
