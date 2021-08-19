// import {useState} from "react";

export default function Cars () {

    // let [model,setModel]= useState('enter model');
    // let [price,setPrice]= useState('enter price');
    // let [year,setYear]= useState('enter year');


    let onCarsSubmit = (e) =>{
        e.preventDefault();
        console.log('cars submit');
        console.log(e.target.model.value);
        console.log(e.target.price.value);
        console.log(e.target.year.value);

        let carsToSave ={model:e.target.model.value, price:e.target.price.value,year:e.target.year.value}
        console.log(carsToSave);

    };

    return (
        <div>
            <form onSubmit={onCarsSubmit} method={'POST'}>
                <input type="text" name={'model'} placeholder='model'/>
                <input type="text" name={'price'} placeholder='price'/>
                <input type="text" name={'year'} placeholder='year'/>
                <button>Save new car</button>

            </form>
        </div>
    )

}