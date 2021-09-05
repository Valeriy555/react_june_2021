import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter

} from "react-router-dom";

import MoviesList from "./сomponents/moviesList/MoviesList";
import GenreBadge from "./сomponents/genre/GenreBadge";


function App() {

    return (

        <Router>
            <div>

                <Link to={'/moviesList'}>getMovies </Link> <br/>
                <Link to={'/genreList'}>getGenres  </Link>


            </div>

            <Route path={'/moviesList'} component={MoviesList}/>
            <Route path={'/genreList'} component={GenreBadge}/>

        </Router>
    );
}

export default App;