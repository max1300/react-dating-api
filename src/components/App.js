import React from 'react';
import './App.scss';
import Navbar from "./Navbar";
import Login from "./login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar/>
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        </Router>
    </>
  );
}

export default App;
