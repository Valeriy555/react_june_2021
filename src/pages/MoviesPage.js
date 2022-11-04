import React from 'react';
import Movies from "../сomponents/Movies/Movies";
import {Genres} from "../сomponents";


const MoviesPage = () => {

    return (
        <div>
            <Genres/>
            <Movies/>
        </div>
    );
};

export default MoviesPage;