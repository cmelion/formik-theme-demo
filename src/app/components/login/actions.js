// Login
const LOGIN = 'LOGIN';

const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
const LOGIN_ERROR = 'LOGIN_ERROR';

const LOGOUT = 'LOGOUT';
const LOGOUT_PENDING = 'LOGOUT_PENDING';


export const logout = () => ({type: LOGOUT_PENDING});
export const userAuthenticatedSSO = payload => ({type: LOGIN_FULFILLED, payload: payload});
export const userLoggedOut = () => ({type: LOGOUT});
export const showLogin = () => ({type: LOGIN});


export const constants = {
    LOGIN,
    LOGIN_FULFILLED,
    LOGIN_ERROR,
    LOGOUT,
    LOGOUT_PENDING
};

export default {
    logout,
    userAuthenticatedSSO,
    userLoggedOut,
    showLogin
};
