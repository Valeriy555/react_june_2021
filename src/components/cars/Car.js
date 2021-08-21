export default function Car({item: carItem}) {

    return (

        <div>
            Id: {carItem.id},
            Model: {carItem.model},
            Price: {carItem.price} USD,
            Year: {carItem.year}
        </div>

    )
}