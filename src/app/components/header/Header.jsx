import React from 'react';
import cx from 'classnames';
import { Logo } from './components/logo';
import styles from './styles.module.scss';

const Header  = () => {

    return (
        <header className={cx({'tools-common-header': true, [styles.header]: true})}>
            <div className="header-titles">
                <Logo className={styles.logo} />
                <span className={cx({'header-title': true, [styles.title]: true})}>App Name</span>
                <span className={cx({'header-subtitle': true, [styles.subtitle]: true})}>App Description</span>
            </div>
        </header>
    );
};

export default Header;
