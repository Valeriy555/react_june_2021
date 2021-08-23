import {useEffect, useState} from "react";
import {saveCars,deleteCarApi} from "../../service/service.api.car";
import Car from "./Car";
import "./Cars.css"


export default function Cars() {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        saveCars().then(value => setCars([...value]))

    }, [cars]);



    let deleteCar =(id)=>{
        deleteCarApi(id).then(value => console.log(value));
        let filterCarsArray = cars.filter(value=>value.id !==id);
        setCars([...filterCarsArray]);
    };


    return (
        <div className={'cars-box'}>
                <div className={'list'}> Car list  </div>
            {
                cars.map((value) => <Car key={value.id}
                    item={value}
                deleteCar={deleteCar}/>)
            }
        </div>
    )
}