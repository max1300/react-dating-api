import React, {useContext} from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
import "./Login.scss";
import AuthContext from "../context/AuthContext";
import History from "../utils/History";
import {ENDPOINT_LOGIN} from "../utils/UrlConstant";
import UserContext from "../context/UserContext";

const Login = (props) => {
    const {updateLogged}= useContext(AuthContext);
    const {username, setUsername} = useContext(UserContext);

    const axiosData = (e) => {
        const email = e.target.elements.email.value;
        const pass = e.target.elements.password.value;
        e.preventDefault();
        axios.post(ENDPOINT_LOGIN, {username:email, password:pass})
            .then(response => {
                console.log(response);
                const token = response.data.token;
                localStorage.setItem("tokenUser", token);
                const userLogin = response.data.login;
                setUsername(userLogin);
                updateLogged(true);
                History.push('/');
            }, (error) => {
                console.log(error);
                localStorage.removeItem("tokenUser");
            });
    }

    return (
            <div className="container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <div id="first">
                                <div className="myform form ">
                                    <div className="logo mb-3">
                                        <div className="col-md-12 text-center">
                                            <h1>Login</h1>
                                        </div>
                                    </div>
                                    <LoginForm getLogin={axiosData}/>
                                </div>
                                <p className="attention-login">You must log in to view the page</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Login;

