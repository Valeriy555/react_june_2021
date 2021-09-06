import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Link,

} from "react-router-dom";

import MoviesList from "./сomponents/moviesList/MoviesList";
import GenreBadge from "./сomponents/genre/GenreBadge";
import MovieDetails from "./сomponents/moviesList/MovieDetails";

function App() {

    return (
        <Router>
            <div>

                <Link to={'/moviesList'}>getMovies </Link> <br/>
                {/*<Link to={'/genreList'}>getGenres  </Link>*/}


            </div>

            <Route  path={'/moviesList'} component={MoviesList}/>


        </Router>
    );
}

export default App;