import {useEffect, useState} from "react";
import {getPost} from "../../services/post.api";

export default function PostDetails(props) {
    let {location: {state}} = props;




    return (
        <div>
            {/*{JSON.stringify(state)}*/}

           <hr/>
               <b> userId:</b> {state.userId};
               <b> id:</b>{state.id};
               <b> title:</b> {state.title};
               <b> body:</b> {state.body}.
            <hr/>

        </div>
    );
}