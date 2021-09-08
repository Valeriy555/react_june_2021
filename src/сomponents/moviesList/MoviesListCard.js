import {useEffect, useState} from "react";
import {discoverMovie} from "../services/movieService";
import {
    Link,

} from "react-router-dom";
export default function MoviesListCard(id) {
    let [movies, setMovies] = useState([]);
    useEffect(() => {
        discoverMovie(id).then(value => setMovies(...[value.data.result]))
    }, [id]);


    return (
        <div>
            {
                movies.map(results => <div key={results.id}>

                    <p> {results.id}</p>
                    <img src={`https://image.tmdb.org/t/p/w200${results.poster_path}`}
                         alt={`${results.original_title}`}/>

                    <p>Overview: {results.overview}</p>


                    <p>Original language: {results.original_language}</p>
                    <p>Release date: {results.release_date}</p>

                    <p>Popularity: {results.popularity}</p>
                    <p> {results.title}</p>
                    <p> Vote average:{results.vote_average}</p>
                    <p>vote_count:{results.vote_count}</p>
                    <p>film genre:{results.genre_ids}</p>

                    {results.title} - <Link to={`moviesList${results.title}`}>more about the film</Link>
                </div>)
            }
        </div>
    );
}





