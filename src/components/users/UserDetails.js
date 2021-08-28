import {useEffect, useState} from "react";
import {getUser} from "../../services/user.appi";

export default function UserDetails({ match: {params: {id}}}) {
    let [user, setUser] = useState({});

    useEffect(() => {
        getUser(id).then(value => setUser({...value}));
    }, [id]);
    return (
        <div>
            <hr/>
            {JSON.stringify(user)}

            <hr/>
        </div>
    );
}