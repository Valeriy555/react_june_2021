const Url='https://jsonplaceholder.typicode.com/users'

const getUsers= ()=>{
    return fetch(Url)
        .then(value => value.json())
}

export {getUsers};