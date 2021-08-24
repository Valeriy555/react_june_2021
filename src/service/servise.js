const getUsers= ()=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

const getPostsOfUser = () =>{
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
}

const getCommentsOfUser = () =>{
    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
}



export {getUsers,getPostsOfUser,getCommentsOfUser};