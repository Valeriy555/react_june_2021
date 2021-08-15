import "./Posts.css"
import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/post.service";


export default function Posts () {

    let [posts,setPosts]= useState([]);

    useEffect(()=> {


        getPostsOfUser().then(({data}) => setPosts([...data]));



    }, [])

    return(
        <div className="postDiv">
            {
                posts.map((postValue,index) => <Post key={postValue.id} value={postValue} />)
            }
        </div>
    );
}