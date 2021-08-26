import {useEffect, useState} from "react";
import {getUsers} from "../services/user.api";

export default function UserDetails({history, match: {params: {id}}}) {
    let [user, setUser] = useState({});
    useEffect(() => {
        getUsers(id).then(value => setUser({...value}));
    }, [id]);

    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
}