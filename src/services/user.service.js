// вариант через fetch

let url='https://jsonplaceholder.typicode.com/users';

const getUsers = () => {
    return fetch(url)
        .then(value => value.json())
};

const getUser = async (id) => {

    let user = await fetch(url + '/' + id)
        .then(value => value.json());
    return user;
};




export {getUsers,getUser}