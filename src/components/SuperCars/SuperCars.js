import {useState} from "react";
import {saveCar} from "../../service/service.api.car";

export default function SuperCar() {

    let [carState, setCarState] = useState({model: "", price: "", year: ""});

    let onFormInputChange = (e) => {

        setCarState({...carState, [e.target.name]: e.target.value});

    };
    let save = (e) => {
        e.preventDefault();
        console.log(carState);
        saveCar(carState)
    }

    return (
        <div>
            <form onSubmit={save}>
                <input type="text" name={'model'} value={carState.model} onChange={onFormInputChange} placeholder='введите модель'/>
                <input type="text" name={'price'} value={carState.price} onChange={onFormInputChange} placeholder='введите стоимость USD'/>
                <input type="text" name={'year'} value={carState.year} onChange={onFormInputChange} placeholder='введите год выпуска'/>
                <input type="submit"/>

            </form>
        </div>
    );
}