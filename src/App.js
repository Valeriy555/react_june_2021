import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";

import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
export default App;


function App() {
    return (
        <Router>
            <div>

                <Link to = {'/users'}>Users page</Link>
<br/><br/>
                <Link to = {'/posts'}>Post page</Link>

                <hr/>
            </div>

            <Route path={'/users'} component={Users}/>

            <Route path={'/posts'} component={Posts}/>

        </Router>

    );
}