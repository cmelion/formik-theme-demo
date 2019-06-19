
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

require('./style.scss');

//TODO: now that this isn't just a Hamburger, maybe it should be renamed?
// Assumes target state is in sync (no shared state)
export const Hamburger = ({children, hamburgerMenu, hamburgerMenuToggled, menuType, target, className}) => {
    const hamburgerStyles = [
        'rot',
        'htx',
        'htla',
        'htra'
    ];
    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (target !== hamburgerMenu.target) {
            hamburgerMenuToggled(false, hamburgerMenu.target);
            hamburgerMenuToggled(true, target);
        } else {
            hamburgerMenuToggled(!hamburgerMenu.isActive, target);
        }
    };
    return (
        <span onClick={handleClick}
              className={
                  cx({
                      [className]: className,
                      hamburger: !menuType || menuType === 'grid' || hamburgerStyles.indexOf(menuType) > -1,
                      'hamburger--rot': menuType === 'rot',
                      'hamburger--htx': menuType === 'htx',
                      'hamburger--htla': menuType === 'htla' || !menuType, // default
                      'hamburger--htra': menuType === 'htra',
                      'tcon-grid tcon-grid--rearrange': menuType === 'grid',
                      circumflex: menuType === 'caret',
                      'text-only': menuType === 'text',
                      'is-active': hamburgerMenu.target === target && hamburgerMenu.isActive
                  })
              }>
            <span className={
                cx({
                    'bar-item': hamburgerStyles.indexOf(menuType) > -1,
                    'tcon-grid__item': menuType === 'grid',
                    'circumflex-item': menuType === 'caret',
                    'text-button': menuType === 'text'
                })
            }>{children}</span>
        </span>
    );
};

Hamburger.propTypes = {
    hamburgerMenu: React.PropTypes.object.isRequired,
    hamburgerMenuToggled: React.PropTypes.func.isRequired,
    menuType: React.PropTypes.string,
    className: React.PropTypes.string,
    target: React.PropTypes.string.isRequired
};
