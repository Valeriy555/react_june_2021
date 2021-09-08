// import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Link,

} from "react-router-dom";

import MoviesList from "./сomponents/moviesList/MoviesList";
import MoviesListCard from "./сomponents/moviesList/MoviesListCard";

export default function App() {

    return (
        <Router>
            <div>

                <Link to={'/moviesList'}>getMovies </Link> <br/>
                <Link to={'/genreList'}>getGenre </Link> <br/>
                <Link to={'/moviesListCard'}>getMovieListCard </Link> <br/>

<hr/>

            </div>

            <Route  path={'/moviesList'} component={MoviesList}/>
            {/*<Route  path={'/genreList'} component={GenreList}/>*/}
            <Route  path={'/moviesListCard'} component={MoviesListCard}/>


        </Router>
    );
}

