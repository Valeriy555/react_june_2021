import {useEffect, useState} from "react";
import {discoverMovie} from "../../services/movieService";
import MovieCard from "./MovieCard";
import './Moviestyle.css'
import {Route} from "react-router-dom";
import MovieDetails from "./MovieDetails";
export default function MoviesList(props) {
//     export default function MoviesList(){
    let {match:{url}} = props;
console.log(url);
    let [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        discoverMovie().then(value => setMoviesList(value.data.results));

    }, [])
    console.log(moviesList)
    return (
        <div className='movie-card'>
            {
                moviesList.map((results,index) => <MovieCard key={results.id} results={results}/>)

            }

            <Route path={`${url}:id`} component={MovieDetails}/>
        </div>
    );
}