import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from './button/index'
import { setTheme } from '../actions'
import './List.css'

const Themes = () => {
    const themes = useSelector(state => state.themes);
    const dispatch = useDispatch();
    const setActiveTheme = (id) => {
        dispatch(setTheme(id));
    };

    return (
    <ul>
        {themes.list.map(
            (theme, id) => <li
                key={theme.name}
            >
                <Button
                    onClick={e => setActiveTheme(id)}
                    text={theme.name}
                />
            </li>
        )}
    </ul>
)};

export default Themes;
