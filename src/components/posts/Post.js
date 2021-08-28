import {
    Link
} from "react-router-dom";

export default function Post({item}) {

    return (
        <div>

            <b> userId:</b> {item.userId}
            <b> id:</b> {item.id}

            <Link to={{pathname: '/posts/' + item.id, state: item}}>Post details</Link>

            <br/> <br/>

        </div>
    );
}
