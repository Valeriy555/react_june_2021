import {useEffect,useState} from "react";
import {getPostsOfUser} from "../../services/users.axios.servis";
import Posts from "../posts/Posts";
import Address from "../address/Address";

export default function Users({item: userItem}) {
    let {address} = userItem;

    let [posts,setPosts]= useState ([]);

    useEffect(() => {
        getPostsOfUser(userItem.id).then(({data}) => setPosts([...data]));

    }, [userItem.id]);


    return (
        <div>
            <h2>{userItem.id} {userItem.name}</h2>
            <Address address ={address}/>

            <Posts items={posts}/>
        </div>
    );
}



