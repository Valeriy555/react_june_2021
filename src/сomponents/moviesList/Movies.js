//
// export default function Movies(props) {
// console.log(props);
//     return (
//         <div>
//           Тут должна быть инфа о фильме !!!!!
//         </div>
//     );
// }

import {
       Link,
      } from "react-router-dom";

import {useEffect, useState} from "react";
import {discoverMovie} from "../services/movieService";


export default function Movies(results){
let [movies, setMovies] = useState([]);
useEffect(()=>{
    discoverMovie().then(value => setMovies(...[value.data._result]))
},[]);

    return (
        <div >
            {
            movies.map(result=> <div className={'MoviesListCard'} key={results.id}>
            <Link target={"_blank"} to='/MovieListCard'> <img src={`https://image.tmdb.org/t/p/w200${results.poster_path}`}
                                                              alt={`${results.original_title}`}/>
            </Link>
            <h3 style ={{textAlign: 'center'}} className={'original_title'}> {results.original_title}</h3>

        </div>)

            }
        </div>
    );
}
