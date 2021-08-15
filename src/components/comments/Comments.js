import "./Comments.css"
import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import {getCommentsOfUser} from "../../services/comment.service";

export default function Comments() {

    let [comments,setComments]= useState([]);

    useEffect(()=> {


        getCommentsOfUser().then(({data}) => setComments([...data]));

    }, [])

    return(
        <div className="comDiv">
            {
                comments.map((commentValue,index) => <Comment key={commentValue.id} value={commentValue} />)
            }
        </div>
    );
}