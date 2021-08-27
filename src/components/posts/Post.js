import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter

} from "react-router-dom";

export default function Post({item, history}) {
    let navigate = () => {
        history.push('/posts/' + item.id, item);
    }
    return (
        <div>

            <b> userId:</b> {item.userId}
            <b> id:</b> {item.id}

            <Link to={{pathname: '/posts/' + item.id, state: item}}>
                Post details</Link>

            {/*<Link to={ '/posts/' + item.id}>Post details</Link>*/}


            <br/> <br/>

        </div>
    );
}
