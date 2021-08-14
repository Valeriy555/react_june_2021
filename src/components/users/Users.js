import User from '../user/User';
import {useEffect, useState} from "react";
// import {getUser, getUsers} from "../../services/user.service"; // вариант через fetch
import {getAxiosUsers} from "../../services/users.axios.servis";// вариант через axios

export default function Users () {

    let [users,setUsers]= useState([]);


   useEffect(()=> {

     // getUsers().then(value => setUsers([...value])); // вариант через fetch

       getAxiosUsers().then(({data}) => setUsers([...data])); // вариант через axios



   }, [])

    return(
        <div>
            {
                users.map((userItem , index) => <User key={userItem.id} item={userItem}/> )
            }
        </div>
    );
}