import {useEffect, useState} from "react";
import {discoverMovie} from "../../services/movieService";
import MovieDetails from "./MovieDetails";

export default function MoviesList() {

    let [moviesList, setMoviesList] = useState([]);

    useEffect(() => {


        discoverMovie().then(value => setMoviesList(value.data.results));


    }, [])
    console.log(moviesList)
    return (
        <div>
            {
                moviesList.map((results,index) => <MovieDetails key={results.id} results={results}/>)


            }
        </div>
    );
}