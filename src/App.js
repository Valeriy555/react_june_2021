import './App.css';
import {Navigate, Route, Routes} from "react-router";
import MainLayout from "./layouts/MainLayout";

import {useSelector} from "react-redux";
import MoviesPage from "./pages/MoviesPage";
import {Details} from "./сomponents";



function App() {
    const {background, color} = useSelector(state => state.themeReducer)
    return (
        <div className="App">
            <div className="page" style={{color:color,background:background}}>
                <Routes>
                    <Route  path={'/'} element={<MainLayout/>}>
                        <Route index element={<Navigate to={'/movies'}/>}/>
                        <Route path={'/movies'} element={<MoviesPage/>}/>
                        <Route path={'/movies/details'} element={<Details/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;

