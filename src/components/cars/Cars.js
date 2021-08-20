// import {useState} from "react";

import {saveCar} from "../../service/service.api.car";

export default function Cars () {



    let onCarsSubmit = (e) =>{
        e.preventDefault();

        // сбор данных с form
        let carsToSave ={model:e.target.model.value, price:e.target.price.value,year:e.target.year.value}

        saveCar(carsToSave);

    };

    return (
        <div>
            <form onSubmit={onCarsSubmit} >
                <input type="text" name={'model'} placeholder='model'/>
                <input type="text" name={'price'} placeholder={'price'}/>
                <input type="text" name={'year'} placeholder={'year'}/>
                <button>Save new car</button>

            </form>
        </div>
    )

}