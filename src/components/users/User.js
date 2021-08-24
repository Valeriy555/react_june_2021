import Address from "./Address";
import Company from "./Company";


export default function User({item: userItem}) {

    let {address} = userItem;
    let {company} = userItem;


    return (
        <div>
            <h3>{userItem.id} {userItem.name} {userItem.username}</h3>
            <p><b>email:</b>{userItem.email};</p>
            <p><b>Phone:</b>{userItem.phone};</p>
            <p><b>Website:</b> {userItem.website}</p>

            <Address address={address}/>
            <Company company={company}/>
            <br/>


        </div>
    );
}