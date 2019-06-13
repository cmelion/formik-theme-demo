import React from 'react'
import { hot } from "react-hot-loader";
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../button'
import { setTheme } from './actions'
import './ThemeList.css'

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

export default hot(module)(Themes);
