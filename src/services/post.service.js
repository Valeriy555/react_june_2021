import axios from 'axios';

let confing = {
    baseURL: 'https://jsonplaceholder.typicode.com/posts',

};

let axiosInstance1 = axios.create(confing);

const getPostsOfUser = ()=>{
    return axiosInstance1.get(`https://jsonplaceholder.typicode.com/posts`);
};
    export {getPostsOfUser};