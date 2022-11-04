import React, {useState} from 'react';
import {Outlet} from "react-router";
import Header from "../сomponents/Header/Header";


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>

        </div>
    );
};

export default MainLayout;