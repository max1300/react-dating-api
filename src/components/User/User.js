import React from "react";
import moment from "moment";
import "./User.scss";

const User = (props) => {

    return(
        <div className="py-5 justify-content-center">
            <div className="container justify-content-center">
                <div className="row hidden-md-up justify-content-center">
                    <div className="col-md-4 justify-content-center">
                        <div className="card" style={{width:"18rem"}}>
                        <img className="card-img-top" src={props.user.profilePic} alt="Card cap" style={{
                            width: "100%",
                            height: "15vw",
                            objectFit: "cover"
                        }}/>
                        <div className="card-body">
                            <h5 className="card-title">{props.user.login}</h5>
                            <p className="card-text">{moment(props.user.birthdayDate).format("MM-DD-YYYY")}</p>
                            <p className="card-text">{props.user.gender}</p>
                            <p className="card-text">{props.user.email}</p>
                            {
                                props.edit &&
                                <form className="form-group">
                                    <input type="text" className="form-control" name="changeLogin" id="changeLogin" placeholder="change login...."/>
                                    <input type="email" className="form-control" name="changeEmail" id="changeEmail" placeholder="change email...."/>
                                    <input type="text" className="form-control" name="changeGender" id="changeGender" placeholder="change gender...."/>
                                    <button className="btn btn-success btn-group-lg">confirmer</button>
                                </form>
                            }
                            {
                                !props.edit &&
                                <button className="btn btn-success btn-group-lg" onClick={() =>props.setEdit(true)}>edit</button>
                            }

                        </div>
                            <button className="btn btn-danger btn-group-lg"onClick={()=>props.deleteUser(props.user.id)}>delete</button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default User;