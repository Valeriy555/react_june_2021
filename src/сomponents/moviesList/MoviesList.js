import "./Users.css"
import User from '../user/User';
import {useEffect, useState} from "react";
import {getAxiosUsers} from "../../services/users.axios.servis";

export default function Users () {

    let [movies,setMovies]= useState([]);

    useEffect(()=> {


        getAxiosUsers().then(({data}) => setMovies([...data]));



    }, [])

    return(
        <div className="userDiv">
            {
                movies.map((userItem , index) => <Movie key={userItem.id} item={userItem}/> )
            }
        </div>
    );
}