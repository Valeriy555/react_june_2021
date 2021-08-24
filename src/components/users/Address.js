import Geo from "../geo/Geo";


export default function Address({address: {street, suite, city, zipcode, geo}}) {
    return (
        <div>
            <b>Address: </b>
            <br/>  City: {city}, Street: {street}, Suite:{suite},Zipcode:{zipcode};
            <p><Geo location={geo}/></p>
        </div>
    );
}
