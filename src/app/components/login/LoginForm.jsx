import React from 'react';
import cx from 'classnames';
import useEvent from 'use-add-event';
import { useDispatch } from 'react-redux';
import { defaults } from 'axios';
import { back, push } from 'redux-first-router';
import { userAuthenticatedSSO } from './actions';
import styles from './styles.module.scss';

const loginScreen = '/api/login';
const expectedOrigin = window.location.protocol + "//" + window.location.host;
const LoginForm = () => {
    const dispatch = useDispatch();
    const handleMessage = (e) => {
        const { origin, data } = e;
        if(origin === expectedOrigin) {
            if (data === "CANCEL") {
                // Return to previous location
                back();
            }
            if (data.token !== undefined) {
                const access_token = data.token;
                defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
                dispatch(userAuthenticatedSSO(data));
                push('/table');
            }
        }
    };

    useEvent('message', handleMessage);

    return (
        <div className={cx({[styles.container]: true, 'no-padding': true})}>
            <div className={styles.mask} />
            <div className={styles.view} >
                <iframe src={loginScreen}
                        title="Login"
                        frameBorder="0"/>
            </div>
        </div>
    );
};

export default LoginForm;
