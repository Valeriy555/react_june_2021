export default function Address ({address: {street,suite,city}})

{
    return(
        <div>
            <em> <b> City: {city}, Street: {street}, Suite:{suite} </b> </em>
        </div>
    );
}
