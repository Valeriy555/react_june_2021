import {useEffect, useState} from "react";
import {discoverGenre, discoverMovie} from "../../services/movieService";
import MovieDetails from "../moviesList/MovieDetails";

export default function GenreBadge(){
    let [genreBadge, setGenreBadge] = useState([]);

    useEffect(() => {


        discoverGenre().then(value => setGenreBadge(value.data.results));


    }, [])


    return (
        <div >
            {
            genreBadge.map((results,index) => <MovieDetails key={results.genre_ids} results={results}/>)
            }
        </div>
    );
}