import axios from 'axios';

let confing = {
    baseURL: 'https://jsonplaceholder.typicode.com/posts',

};

let axiosInstance2 = axios.create(confing);

const getCommentsOfUser = ()=>{
    return axiosInstance2.get(`https://jsonplaceholder.typicode.com/comments`);
};
export {getCommentsOfUser};