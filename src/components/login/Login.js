import React from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
import "./Login.scss";


const Login = () => {

    const axiosData = (e) => {
        const email = e.target.elements.email.value;
        const pass = e.target.elements.password.value;
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL_BACK}api/login_check`, {username:email, password:pass})
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
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
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
export default Login;

