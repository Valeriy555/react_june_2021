import {useEffect, useState} from "react";
import {getUsers} from "../../service/servise";

export default function Users() {
    let [users,setUsers] = useState([]);
    useEffect(()=>{
      getUsers().then(value => setUsers([]))
    },[]);

    return (
        <div>
            {
                users.map(userItem=> <div key={userItem.id} item = {userItem.name}/>)
            }

        </div>
    );
}