
export default function Car({item,deleteCar}) {

    let onClickDeleteCar = () => {deleteCar(item.id); };


    return (
        <div>
            Id: {item.id}
            Model: {item.model}
            Price: {item.price} USD
            Year: {item.year}
            <button onClick={onClickDeleteCar}>delete</button>
        </div>

    )
}