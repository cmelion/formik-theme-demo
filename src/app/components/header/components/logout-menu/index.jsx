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
import cx from 'classnames';
import './style.scss';

const clientVersion = require('../../../../../../package.json').version;

// Assumes target state is in sync (no shared state)
export const LogoutMenu = ({hamburgerMenu, hamburgerMenuToggled, info, logout, target}) => {
    const handleClick = () => {
        hamburgerMenuToggled(!hamburgerMenu.isActive, target);
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
            <li className="version-info">Server: {info.version}</li>
        </ul>
    );
};

LogoutMenu.propTypes = {
    hamburgerMenu: React.PropTypes.object.isRequired,
    hamburgerMenuToggled: React.PropTypes.func.isRequired,
    target: React.PropTypes.string.isRequired
};
