// import Address from "../address/Address";
// import Company from "../company/Company";


export default function Movies({item: movieItem}) {

    // let {address} = userItem;
    // let {company} = userItem;




    return (
        <div>
            <h3>{movieItem.id} {movieItem.title} {movieItem.genre_ids}</h3>
            {/*<p><b>email:</b>{userItem.email};</p>*/}
            {/*<p><b>Phone:</b>{userItem.phone};</p>*/}
            {/*<p><b>Website:</b> {userItem.website}</p>*/}

            {/*<Address address={address}/>*/}
            {/*<Company company={company}/>*/}
            <br/>


        </div>
    );
}



