import {useEffect, useState} from "react";
import {discoverMovie} from "../services/movieService";


export default function MoviesList({props,results}) {

    let [movies, setMovies] = useState([]);

    useEffect(() => {
        discoverMovie().then(value => setMovies(value.data.results));

    }, [])
    console.log(movies)
    return (
        <div className='movie-card'>
            {
                // movies.map((results,index) => <MoviesListCard key={results.id} results={results}/>)
                movies.map(results=> <div key={results.id} >
                    title:{results.title}<br/>
                    generes:{results.genre_ids.name}
                </div>)

            }

            {/*<Route path={`${url}:id`} component={Movies}/>*/}
        </div>
    );
}