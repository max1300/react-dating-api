import React from "react";

const User = (props) => {

    return(
        <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top" src={props.user.profilePic} alt="Card image cap" style={{
                width: "100%",
                height: "15vw",
                objectFit: "cover"
            }}/>
                <div className="card-body">
                    <h5 className="card-title">{props.user.login}</h5>
                    <p className="card-text">{props.user.birthdayDate}</p>
                    <p className="card-text">{props.user.gender}</p>
                    <p className="card-text">{props.user.email}</p>
                </div>
        </div>
    );
}
export default User;