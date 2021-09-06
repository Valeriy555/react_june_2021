import './Moviestyle.css'
import {
    Link,
} from "react-router-dom";

export default function MovieCard({results}) {


    return (
        <div>
            {/*<p> {results.id}</p>*/}
            {/*<p> {results.title}</p>*/}
            {/*<p>Popularity: {results.popularity}</p>*/}
            {/*<p>Overview: {results.overview}</p>*/}
            {/*<p>Release date: {results.release_date}</p>*/}
            {/*<p>Original language: {results.original_language}</p>*/}
            {/*<p> Vote average:{results.vote_average}</p>*/}

            <img src={`https://image.tmdb.org/t/p/w200${results.poster_path}`} alt={`${results.original_title}`}/>
            <br/>
            <Link to={{pathname:`/moviesList${results.id}`,state:results}}>more about the film</Link>
            {/*<a href="../MoviesListCard.js"target="_blank"> <img src= {`https://image.tmdb.org/t/p/w200${results.poster_path}`}*/}
            {/*                                                    alt={`${results.original_title}`}/></a>*/}

        </div>
    );
}





