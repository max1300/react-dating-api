import React from "react";

const PassInput = () => {
    return (
        <div className="form-group">
            <label htmlFor="InputPassword">Password</label>
            <input type="password" name="password" id="password" className="form-control"
                   aria-describedby="emailHelp"
                   placeholder="Enter Password..."/>
        </div>
    );
}
export default PassInput;