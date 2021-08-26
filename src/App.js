import {
    BrowserRouter as Router,
    Route,
    Link,

} from "react-router-dom";
import Users from "./components/Users";

export default App;

function App(){

    return (
        <Router>
            <div >
                <Link to={'/users'}>users page</Link>

            </div>
            <Route  path={'/users'} component={Users}/>

        </Router>
    );
}