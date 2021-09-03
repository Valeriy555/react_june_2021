import {useEffect, useState} from "react";
import {discoverMovie} from "../../services/movieService";

export default function Movies() {

    let [movies, setMovies] = useState([]);

    useEffect(() => {
        discoverMovie().then(({data}) => setMovies([...data]));
    }, [])
}

return (
    {
        movies.map((movieItem,) =>
            <Movie key={movieItem.id} item = {movieItem}/>)
}

</div>
)