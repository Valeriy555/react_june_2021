// import {useEffect, useState} from "react";
// import {discoverGenre, discoverMovie} from "../../services/movieService";
// import MovieCard from "../moviesList/MovieCard";
//
// export default function GenreBadge(){
//     let [genreBadge, setGenreBadge] = useState([]);
//
//     useEffect(() => {
//
//
//         discoverGenre().then(value => setGenreBadge(value.data.results));
//
//
//     }, [])
//
//
//     return (
//         <div >
//             {
//             genreBadge.map((results,index) => <MovieCard key={results.genre_ids} results={results}/>)
//             }
//         </div>
//     );
// }