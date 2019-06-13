import React from 'react'

import { useSelector } from 'react-redux'

import styles from './themes.module.css'

const Theme = ({ children }) => {
    const themes = useSelector(state => state.themes);
    const name = themes.list[themes.active].name;
    return (
        <div className={styles[name]}>
            {children}
        </div>
    );
};

export default Theme;
