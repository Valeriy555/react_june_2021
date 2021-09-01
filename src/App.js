import {useSelector} from "react-redux";

export default function App() {
    let state = useSelector(state => state);
    console.log('app',state)

    return(
        <div>
            App
        </div>
    );
}