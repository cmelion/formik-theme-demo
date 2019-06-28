import React from "react";
import cx from "classnames";
import Link from "redux-first-router-link";
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux';
import { Hamburger, actions as hamburgerActions } from "./components/hamburger";
import { LogoutMenu} from "./components/logout-menu";
import { Logo } from "./components/logo";
import styles from "./styles.module.scss";

export const LOGOUT_MENU = "logout-menu";

// TODO: import from the login component
const LOGOUT_PENDING = "LOGOUT_PENDING";
export const logoutAction = () => ({type: LOGOUT_PENDING});

const Header  = ({loggedIn, user, ...rest}) => {
    const dispatch = useDispatch();
    const actions = {...hamburgerActions, logoutAction};
    const { toggleHamburgerMenu, logoutAction:logout } = bindActionCreators(actions, dispatch);
    const hamburgerMenu = useSelector(state => state.hamburgerMenu);

    const logoutBtnClasses = cx({
        'user-info': true,
        login: true
    });

    const headerMenuClass = cx({
        'header-menu': true,
        open: false
    });

    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (hamburgerMenu.target !== LOGOUT_MENU) {
            toggleHamburgerMenu(false, LOGOUT_MENU);
            toggleHamburgerMenu(true, LOGOUT_MENU);
        } else {
            toggleHamburgerMenu(!hamburgerMenu.isActive, LOGOUT_MENU);
        }
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
                <div className={cx({'menu-items': true, [styles.login]: true})}>
                    {
                        (loggedIn) ?
                            <div className={logoutBtnClasses}
                                 onClick={handleClick}>
                                {user.email}
                                <Hamburger menuType="caret"
                                           hamburgerMenu={hamburgerMenu}
                                           toggleHamburgerMenu={toggleHamburgerMenu}
                                           target={LOGOUT_MENU}
                                           logout={logout} {...rest}/>
                            </div>
                            :
                            <Link className={logoutBtnClasses} to={{ type: "LOGIN" }}>LOGIN</Link>
                    }
                </div>
            </div>
            <LogoutMenu target={LOGOUT_MENU}
                        info={{}}
                        hamburgerMenu={hamburgerMenu}
                        logout={logout}
                        toggleHamburgerMenu={toggleHamburgerMenu} />
        </header>
    );
};

export default Header;
