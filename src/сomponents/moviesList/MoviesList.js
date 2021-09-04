import {useEffect, useState} from "react";

// import MoviesListCard from "./MoviesListCard";
import {discoverMovie} from "../../services/movieService";

export default function MoviesList() {

    let [moviesList, setMoviesList] = useState([]);

    useEffect(() => {


        discoverMovie().then(value => setMoviesList(value.data.results));


    }, [])
    console.log(moviesList)
    return (
        <div>
            {
                moviesList.map(results => <div key={results.id}>
                    <p> id: {results.id}</p>
                    <p>Name: {results.title}</p>
                    <p>Popularity: {results.popularity}</p>
                    <p>Overview: {results.overview}</p>
                    <p>Release date: {results.release_date}</p>
                    <p>Original language: {results.original_language}</p>

                        <img src={`https://image.tmdb.org/t/p/w200${results.poster_path}`} alt={`${results.original_title}`}/>
<hr/>
                </div>)
            }
        </div>
    );
}