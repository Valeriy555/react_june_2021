import {useEffect, useState} from "react";
import {discoverMovie} from "../../services/movieService";
import MoviesListCard from "./MoviesListCard";
// import './Moviestyle.css'
export default function MoviesList() {

    let [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        discoverMovie().then(value => setMoviesList(value.data.results));

    }, [])
    console.log(moviesList)
    return (
        <div className='movie-card'>
            {
                moviesList.map((results,index) => <MoviesListCard key={results.id} results={results}/>)

            }

            {/*<Route path={`${url}:id`} component={MovieDetails}/>*/}
        </div>
    );
}