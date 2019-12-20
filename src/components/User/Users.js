import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {ENDPOINT_USERS} from "../utils/UrlConstant";
import UserContext from "../context/UserContext";
import AuthContext from "../context/AuthContext";
import User from "./User";
import Loader from "../utils/Loader";
import EmailInput from "../login/EmailInput";
import PassInput from "../login/PassInput";

const Users = () => {
    const [users, setUser] = useState([]);
    const [addUser, setAddUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const {isLogged} = useContext(AuthContext);
    const {username} = useContext(UserContext);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};

    useEffect(() =>{
            axios.get(ENDPOINT_USERS, config)
                .then(response => {
                    const userList = response.data['hydra:member'];
                    setUser(userList);
                    setLoading(true);
                }, (error) => {
                    console.log(error);
                });
    },[])

    const deleteUser = (id) => {
        setUser(users.filter(user => user.id !== id));
    }

    const addPork = (e) =>{
        e.preventDefault();
        console.log(e.target.elements);
        setAddUser({
            login:e.target.elements.login.value,
            password:e.target.elements.password.value,
            email:e.target.elements.email.value,
            id:users.length+1,
            profilePic:"http://lorempixel.com/400/200"
        })
    }

    useEffect(() => {
        if(addUser !== null){
            setUser([...users, addUser]);
        }
    }, [addUser])

    return (
        <div className="container">
            <h1 className="h1 text-center" style={{marginTop:"4%", fontFamily: "Girassol, cursive", color:"black"}}>WHAT IS YOUR CHOICE TODAY ?</h1>
            <form className="form-group" onSubmit={addPork}>
                <EmailInput/>
                <PassInput/>
                <label htmlFor="InputLogin">Login</label>
                <input type="text" name="login" id="login" className="form-control" placeholder="Enter login..."/>
                <button className="btn btn-success btn-group-lg" type="submit">jouter un nouvel amant</button>
            </form>
            <div className="d-inline-flex p-2 bd-highlight" style={{textAlign:"center"}}>
                {!loading && <Loader/>}
            </div>
                <div className='row text-center'>
                    {isLogged && username && users && users.map(user => <User deleteUser={deleteUser} edit={edit}  setEdit={setEdit} user={user} key={user.id} />)}
                </div>
        </div>
    );
}
export default Users;