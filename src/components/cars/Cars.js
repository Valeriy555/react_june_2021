import {useEffect, useState} from "react";
import {saveCars} from "../../service/service.api.car";
import Car from "./Car";
import "./Cars.css"
// import FormCar from "../car/FormCar";

export default function Cars() {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        saveCars().then(value => setCars([...value]))

    }, [cars]);


    return (
        <div className={'cars-box'}>
                <div className={'list'}> Car list  </div>
            {
                cars.map((carItem) => <Car
                    key={carItem.id}
                    item={carItem}/>)
            }
        </div>
    )

}