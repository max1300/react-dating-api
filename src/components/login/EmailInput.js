import React from "react";


const EmailInput = () => {
    return (
        <div className="form-group">
            <label htmlFor="InputEmail">Email</label>
            <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"
                   placeholder="Enter email..."/>
        </div>
    );
}
export default EmailInput;