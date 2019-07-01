import React from 'react';
import Link from 'redux-first-router-link';
import cx from 'classnames';

require('./style.scss');

// Assumes target state is in sync (no shared state)
const NavigationMenu = ({hamburgerMenu, hamburgerMenuToggled, target}) => {
    const handleClick = () => {
        hamburgerMenuToggled(!hamburgerMenu.isActive, target);
    };
    return (
        <ul className={
            cx({
                'hamburger-navigation-menu': true,
                'is-active': hamburgerMenu.target === target && hamburgerMenu.isActive
            })
        }>
            <li className="is-navigation hover" onClick={handleClick}>
                <Link to="/first-link">
                    <div>Your 1st Menu Item</div>
                    <div>Get First Menu Item target</div>
                </Link>
            </li>
            <li>&nbsp;</li>
            <li className="is-navigation disabled">
                <Link to="" className="disabled">
                    <div>Dashboard</div>
                    <div>My Customizable Dashboard</div>
                </Link>
            </li>
        </ul>
    );
};

export default NavigationMenu;
