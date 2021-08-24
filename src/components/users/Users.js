import {useEffect, useState} from "react";
import {getUsers} from "../../service/servise";
import User from "./User";

export default function Users() {
    let [users,setUsers] = useState([]);
    useEffect(()=>{
      getUsers().then(value => setUsers([...value]))
    },[]);

    return (
        <div>
            {
                users.map(userItem=> <User key={userItem.id} item={userItem}/>)
            }

        </div>
    );
}