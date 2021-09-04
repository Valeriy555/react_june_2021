import {useEffect, useState} from "react";
import {discoverMovie,discoverGenre} from "../../services/movieService";
import MovieDetails from "./MovieDetails";
import './Moviestyle.css'
export default function MoviesList() {

    let [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        discoverMovie().then(value => setMoviesList(value.data.results));

    }, [])
    console.log(moviesList)
    return (
        <div className='movie-card'>
            {
                moviesList.map((results,index) => <MovieDetails key={results.id} results={results}/>)

            }
        </div>
    );
}