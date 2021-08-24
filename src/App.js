import {
    BrowserRouter as Router,
        Route,
    Link,

} from "react-router-dom"

import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";

export default function App() {
    return (

        <Router>
            <div>
                <Link to={'/'}>null</Link>
                <br/>
                <Link to={'/users'}>Users page</Link>
                <br/>
                <Link to={'/posts'}>Posts page</Link>
                <br/>
                <Link to={'/comments'}>Comments page</Link>
                <br/>

            </div>
            <hr/>

            <div>

                <Route path={'/users'} render={(props) => {

                    return <Users/>}}/>

                <Route path={'/posts'} render={(props) => {

                    return <Posts/>}}/>

                <Route path={'/comments'} render={(props) => {

                    return <Comments/>}}/>

            </div>
        </Router>


    )
}