const saveCar = (car) => {
    fetch('http://91.201.233.14/api/v1/cars',{
        method:'POST',
        body: JSON.stringify(car),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}
const saveCars = (cars) => {
    return fetch('http://91.201.233.14/api/v1/cars',{
        method:'GET',
        body: JSON.stringify(cars),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
    // .then((json) => console.log(json));

}


export {saveCar,saveCars};