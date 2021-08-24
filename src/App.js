import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
} from "react-router-dom"

import Home from "./components/Home";
import About from "./components/About";

export default function App() {
    return (

        <Router>
            <div>
                <Link to={'/'}>null</Link>
                <br/>
                <Link to={'/home'}>Home page</Link>
                <br/>
                <Link to={'/about'}>About page</Link>
                <br/>
                <Link to={'/contacts'}>Contacts page</Link>
                <br/>
            </div>
        <hr/>
            <div>
                <Route path={'/home'}>  // первый вариант
                    <Home/>
                </Route>

            <Route path={'/about'} component={About}/>

            </div>
        </Router>


    )
}