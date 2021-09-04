import './Moviestyle.css'

export default function MovieDetails({results}) {

    return (
        <div className={'movie-card'}>
            <div>
                Title: {results.title}
                Popularity: {results.popularity}
                Overview: {results.overview}
                Release date: {results.release_date}
                Original language: {results.original_language}

                <img src={`https://image.tmdb.org/t/p/w200${results.poster_path}`} alt={`${results.original_title}`}/>
            </div>
        </div>
    );
}





