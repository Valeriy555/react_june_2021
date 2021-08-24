import {useEffect, useState} from "react";
import {getCommentsOfUser} from "../../service/servise";
import Comment from "./Comment";


export default function Comments() {
    let [comments,setComments]= useState([]);
    useEffect(()=> {
        getCommentsOfUser().then(value => setComments([...value]))
    }, []);

    return(
        <div>
            {
                comments.map(commentItem => <Comment key={commentItem.id} commentItem={commentItem} />)
            }
        </div>
    );
}
