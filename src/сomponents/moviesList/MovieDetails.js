import './Moviestyle.css'
import GenreBadge from "../genre/GenreBadge";

export default function MovieDetails({results}) {

    return (
        <div >

                <p> {results.title}</p>
                {/*Popularity: {results.popularity}*/}
                {/*Overview: {results.overview}*/}
                {/*Release date: {results.release_date}*/}
                {/*Original language: {results.original_language}*/}




                <img src={`https://image.tmdb.org/t/p/w200${results.poster_path}`} alt={`${results.original_title}`}/>

        </div>
    );
}





