import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

const loginScreen = '/api/login';

const LoginForm = () =>
    <div className={cx({[styles.container]: true, 'no-padding': true})}>
        <div className={styles.mask} />
        <div className={styles.view} >
            <iframe src={loginScreen}
                    title="Login"
                    frameBorder="0"/>
        </div>
    </div>;

export default LoginForm;
