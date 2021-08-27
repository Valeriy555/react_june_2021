export default function User({item, history}) {
    let  navigate = ()=>{
        history.push('/users/'+item.id, item);
    }
    return (
        <div>
            name: <b>{item.name}</b><br/>
            username: <b>{item.username}</b>
            <br/>
            <button onClick={navigate}> User details </button>
            <br/> <br/>


        </div>
    );
}
