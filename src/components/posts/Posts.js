import {
    Route,
} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.api";
import Post from "../posts/Post";
import PostDetails from "../posts/PostDetails";

export default function Posts(props) {
    let {match: {url}} = props;
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
                posts.map(value => <Post  item={value} key={value.id}/>)
            }


            <Route path={`${url}/:id`} component={PostDetails}/>
        </div>
    );
}