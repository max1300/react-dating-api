import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {ENDPOINT_USERS} from "../utils/UrlConstant";
import UserContext from "../context/UserContext";
import User from "./User";

const Users = () => {
    const [users, setUser] = useState([]);
    const {username} = useContext(UserContext);
    const token = localStorage.getItem('tokenUser');
    const config = {headers: {Authorization: "Bearer " + token}};

    useEffect(() =>{
            const apiUsers = axios.get(ENDPOINT_USERS, config)
                .then(response => {
                    console.log(response);
                    const userList = response.data['hydra:member'];
                    setUser(userList);
                    console.log(userList);
                }, (error) => {
                    console.log(error);
                });
    },[])


    return (
        <div className='row'>
        {username && users && users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
}
export default Users;