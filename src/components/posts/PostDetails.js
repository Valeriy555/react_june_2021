import {useEffect, useState} from "react";
import {getPost} from "../../services/post.api";
export default function PostDetails({history, match: {params:{id}}}) {

    let [post, setPost] = useState( {});

    useEffect( ()=>{
        getPost(id).then(value => setPost( {value}));
    }, [id]);
    return (
        <div>
            {JSON.stringify(post)}


        </div>
    );
}