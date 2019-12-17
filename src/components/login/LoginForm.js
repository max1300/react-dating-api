import React from "react";
import EmailInput from "./EmailInput";
import PassInput from "./PassInput";
import TermOfUse from "./TermOfUse";
import SignUpButton from "./SignUpButton";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.getLogin}>
            <EmailInput/>
            <PassInput/>
            <TermOfUse/>
            <SignUpButton/>
        </form>

    );
}
export default LoginForm;