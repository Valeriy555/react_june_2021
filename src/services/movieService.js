import axios from "axios";
let url='https://api.themoviedb.org/3/'
const instance = axios.create({
    baseURL: (url),
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWQ5MmI2NDhiZmFiMjc3ZDdmNmFkNGMzZjlmMDYxMCIsInN1YiI6IjYxMzBhN2ZiNmEzNDQ4MDA5MGY2Y2FlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7PTL0s6BmgVbKC7FcVx-u1PGwIkKnWTSsSuw2UXvgwU'
    }
});

const discoverMovie = async () => await instance.get('/discover/movie');
// const discoverGenre = async () => await instance.get('/genre/movie/list');

export {discoverMovie};