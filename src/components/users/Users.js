import "./Users.css"
import User from '../user/User';
import {useEffect, useState} from "react";
import {getAxiosUsers} from "../../services/users.axios.servis";

export default function Users () {

    let [users,setUsers]= useState([]);

   useEffect(()=> {


       getAxiosUsers().then(({data}) => setUsers([...data]));



   }, [])

    return(
        <div className="userDiv">
            {
                users.map((userItem , index) => <User key={userItem.id} item={userItem}/> )
            }
        </div>
    );
}