import {
    Route,
} from "react-router-dom";
import {useEffect, useState} from "react";
import User from "./User";
import {getUsers} from "../services/user.appi";
import UserDetails from "./UserDetails";

export default function Users(props) {
    let{match:{url}, history}=props;
    let[users, setUsers]=useState( []);
    useEffect( ()=>{
        async function fetchData(){
            let userList=await getUsers();
            setUsers( [...userList])
        }
        fetchData();
    }, []);
    return (
        <div>
            {
                users.map(value => <User history = {history} item={value} key={value.id}/>)
            }
            <Route path={`${url}/:id`} render={(props)=>{
                return <UserDetails {...props}/>
            }}/>
        </div>
    );
}