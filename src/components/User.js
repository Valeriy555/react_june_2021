export default function User({item,history}) {

    let navigate = () => {
        history.push('/users/'+item.id, item);
    }
    return (
        <div>
            <br/>
            name: <b>{item.name}</b><br/>
            username:<b>{item.username}</b><br/>

             <button onClick={navigate}>user details </button>
            <br/>

        </div>
    );
}

