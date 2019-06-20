import React from 'react';
import cx from 'classnames';
import Link from 'redux-first-router-link';
import {Hamburger} from './components/hamburger';
import { Logo } from './components/logo';
import styles from './styles.module.css';

export const LOGOUT_MENU = 'logout-menu';

// TODO: import from the login component
const LOGOUT_PENDING = 'LOGOUT_PENDING';
export const logout = () => ({type: LOGOUT_PENDING});

const Header  = ({loggedIn, user, ...rest}) => {

    const logoutBtnClasses = cx({
        'header-button user-info': true,
        login: true
    });

    const headerMenuClass = cx({
        'header-menu': true,
        open: false
    });

    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
    };

    return (
        <header className={cx({[styles.header]: true, 'tools-common-header': true})}>
            <div className="header-titles">
                <Logo className={styles.logo} />
                <span className={cx({'header-title': true, [styles.title]: true})}>
                    <Link to={{ type: "THEMELIST" }}>App Name</Link>
                </span>
                <span className={cx({'header-subtitle': true, [styles.subtitle]: true})}>App Description</span>
            </div>
            <div className={headerMenuClass}>
                <div className="menu-items">
                    {
                        (loggedIn) ?
                            <div className={logoutBtnClasses}
                                 onClick={handleClick}>
                                {user.email}
                                <Hamburger menuType="caret" target={LOGOUT_MENU} logout={logout} {...rest}/>
                            </div>
                            :
                            <Link className={logoutBtnClasses} to={{ type: "LOGIN" }}>LOGIN</Link>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
