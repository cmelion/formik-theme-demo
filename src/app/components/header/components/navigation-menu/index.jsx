/*
 Copyright (c) 2016 Home Box Office, Inc. as an unpublished
 work. Neither this material nor any portion hereof may be copied
 or distributed without the express written consent of Home Box Office, Inc. *
 This material also contains proprietary and confidential information
 of Home Box Office, Inc. and its suppliers, and may not be used by or
 disclosed to any person, in whole or in part, without the prior written
 consent of Home Box Office, Inc.
 */

import React from 'react';
import {Link} from 'react-router';
import cx from 'classnames';

require('./style.scss');

// Assumes target state is in sync (no shared state)
export const NavigationMenu = ({hamburgerMenu, hamburgerMenuToggled, target}) => {
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
                        <Link to="/app-store">
                            <div>Toolshed</div>
                            <div>Get Apps</div>
                        </Link>
                    </li>
                    <li>&nbsp;</li>
                    <li className="is-navigation hover">
                        <a href={'https://permissions.tools.hbo.com'} target="_blank">
                            <div>Permissions</div>
                            <div>Manage Team Access for Apps</div>
                        </a>
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

NavigationMenu.propTypes = {
    hamburgerMenu: React.PropTypes.object.isRequired,
    hamburgerMenuToggled: React.PropTypes.func.isRequired,
    target: React.PropTypes.string.isRequired
};
