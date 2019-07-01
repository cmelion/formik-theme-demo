import React from 'react';
import cx from 'classnames';
import './style.scss';

const clientVersion = require('../../../../../../package.json').version;

// Assumes target state is in sync (no shared state)
const LogoutMenu = ({hamburgerMenu, toggleHamburgerMenu, info, logout, target}) => {
    const handleClick = () => {
        toggleHamburgerMenu(!hamburgerMenu.isActive, target);
        logout();
    };
    return (
        <ul className={
            cx({
                'hamburger-logout-menu': true,
                'is-active': hamburgerMenu.target === target && hamburgerMenu.isActive
            })
        }>
            <li onClick={handleClick} className="btn-primary">LOGOUT</li>
            <li className="version-info"> &nbsp; </li>
            <li className="version-info">Client: {clientVersion}</li>
            {/*<li className="version-info">Server: {info.version}</li>*/}
        </ul>
    );
};

export default LogoutMenu;
