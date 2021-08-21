import {useEffect, useState} from "react";
import {saveCars} from "../../service/service.api.car";
import Car from "../car/Car";

export default function Cars () {

    let [cars,setCars]=useState([]);
    useEffect(() =>{
        saveCars().then(value =>setCars([...value]))
    },[]);


return(
    <div className={'cars-box'}>
cars.map(value=> <Car item={value} />

    </div>
)

}