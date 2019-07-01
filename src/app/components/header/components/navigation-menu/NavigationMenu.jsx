import React from 'react';
import Link from 'redux-first-router-link';
import cx from 'classnames';

require('./style.scss');

// Assumes target state is in sync (no shared state)
const NavigationMenu = ({hamburgerMenu, toggleHamburgerMenu, target}) => {
    const handleClick = () => {
        toggleHamburgerMenu(!hamburgerMenu.isActive, target);
    };
    return (
        <ul className={
            cx({
                'hamburger-navigation-menu': true,
                'is-active': hamburgerMenu.target === target && hamburgerMenu.isActive
            })
        }>
            <li className="is-navigation hover" onClick={handleClick}>
                <Link to={{ type: "DATATABLE" }}>
                    <div>Data Table</div>
                    <div>Sample Data Table</div>
                </Link>
            </li>
            <li>&nbsp;</li>
            <li className="is-navigation disabled">
                <Link to={{ type: "THEMELIST" }} className="disabled">
                    <div>Dashboard</div>
                    <div>My Customizable Dashboard</div>
                </Link>
            </li>
        </ul>
    );
};

export default NavigationMenu;
