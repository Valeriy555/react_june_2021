import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../service/servise";
import Post from "./Post";



export default function Posts () {

    let [posts,setPosts]= useState([]);

    useEffect(()=> {
        getPostsOfUser().then(value => setPosts([...value]))
    },[]);

    return(
<div>
            {
                posts.map(postItem=> <Post key={postItem.id} postItem ={postItem}/>)
            }
</div>
    );
}
