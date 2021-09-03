import './App.css'
import {useEffect} from "react";
import {discoverMovie} from "./services/movieService";

function App() {
    useEffect(()=> {
        discoverMovie().then(value => console.log(value.data.results));
    },[])
    return(
        <div className="App">
            <header className="App-header">

            </header>

        </div>
    );
}

export default App;