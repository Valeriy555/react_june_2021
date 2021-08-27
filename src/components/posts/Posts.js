import {

    Route,
} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.api";
import Post from "../posts/Post";
import PostDetails from "../posts/PostDetails";

export default function Users(props) {
    let {match: {url}, history} = props;
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let postList = await getPosts();
            setPosts([...postList])
        }

        fetchData();
    }, []);

    return (
        <div>
            {
                posts.map(value => <Post history={history} item={value} key={value.id}/>)
            }


            <Route path={`${url}/:id`} render={(props) => {
                return <PostDetails {...props}/>
            }}/>
        </div>
    );
}