import {useState} from "react";
import {saveCar} from "../../service/service.api.car";

export default function SuperCars() {

    let [carsState, setCarsState] = useState({model: "", price: "", year: ""});

    let onFormInputChange = (e) => {

        setCarsState({...carsState, [e.target.name]: e.target.value});

    };
    let save = (e) => {
        e.preventDefault();
        console.log(carsState);
        saveCar(carsState)
    }

    return (
        <div>
            <form onSubmit={save}>
                <input type="text" name={'model'} value={carsState.model} onChange={onFormInputChange} placeholder='введите модель'/>
                <input type="text" name={'price'} value={carsState.price} onChange={onFormInputChange} placeholder='введите стоимость USD'/>
                <input type="text" name={'year'} value={carsState.year} onChange={onFormInputChange} placeholder='введите год выпуска'/>
                <input type="submit"/>

            </form>
        </div>
    );
}