import React, {useEffect, useState} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faToggleOff, faToggleOn} from '@fortawesome/free-solid-svg-icons'

import './Header.scss'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions, themeAction} from "../../redux";

const Header = () => {
    const [theme, setTheme] = useState(false)

    const {page, movies, filterParam} = useSelector(state => state.moviesReducer)

    const {register, handleSubmit, reset} = useForm({defaultValues: {filter: ''}})
    const dispatch = useDispatch()


    const submit = async (data) => {
        await dispatch(moviesActions.setFilterParam(data.filter))
        reset()
    }

    return (
        <header className={'header'}>
            <div className="header__logo">
                <p className="header__logo-logo">EDF</p>
            </div>
            {!theme ? (<FontAwesomeIcon
                    icon={faToggleOff}
                    className="header__theme"
                    onClick={() => {
                        setTheme(true)
                        dispatch(themeAction.setLightTheme())
                    }
                    }/>)
                : (<FontAwesomeIcon
                    icon={faToggleOn} className="header__theme"
                    onClick={() => {
                        setTheme(false)
                        dispatch(themeAction.setDarkTheme())
                    }}
                />)}
            <form className={'header__form'} onSubmit={handleSubmit(submit)}>

                <input type="text" placeholder={'Enter film name'}
                       className={'header__form-input'} {...register('filter')}/>
                <button className={'header__form-button'}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </form>

        </header>
    );
};

export default Header;