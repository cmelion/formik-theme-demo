import {push} from 'react-router-redux';
import ActionTypes from './action-types';

export const logout = () => ({type: ActionTypes.LOGOUT_PENDING});
export const userAuthenticatedSSO = payload => ({type: ActionTypes.LOGIN_FULFILLED, payload: payload});
export const userLoggedOut = () => ({type: ActionTypes.LOGOUT});
export const showLogin = () => push('/login');

const LoginActions = {logout, userAuthenticatedSSO, showLogin, userLoggedOut};

export default LoginActions;
