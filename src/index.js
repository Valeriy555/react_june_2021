import React, {createContext} from 'react';

import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {setUpStore} from "./redux/store/store";
import ReactDOM from "react-dom/client";


const themes = {
    dark: {
        background: '#18171B',
        color: 'white'
    },
    light: {
        background: '#ffdead',
        color: 'black'
    }
}
const store = setUpStore()
const ThemeContext = createContext(themes)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeContext.Provider value={themes}>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </ThemeContext.Provider>
);

export {ThemeContext}

