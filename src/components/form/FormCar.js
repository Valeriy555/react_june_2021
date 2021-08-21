import {saveCar} from "../../service/service.api.car";

export default function FormCar ()
{
    let onCarsSubmit = (e) =>{
        e.preventDefault();
        // сбор данных с form
        let carToSave ={model:e.target.model.value, price:e.target.price.value,year:e.target.year.value}

        saveCar(carToSave);
    };


    return (
        <div>

            <form onSubmit={onCarsSubmit} >
                <input type="text" name={'model'} placeholder={'enter model'}/>
                <input type="text" name={'price'} placeholder={'enter price'}/>
                <input type="text" name={'year'} placeholder={'enter year'}/>
                <button>Save new car</button>
            </form>

        </div>
    );

}
