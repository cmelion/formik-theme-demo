import { constants as c } from './actions'

const DEFAULT = {
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
};

export default function reducer(state = DEFAULT, action) {
    switch (action.type) {
        case c.SET_LOGIN_PENDING:
            return Object.assign({}, state, {
                isLoginPending: action.isLoginPending
            });

        case c.SET_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoginSuccess: action.isLoginSuccess
            });

        case c.SET_LOGIN_ERROR:
            return Object.assign({}, state, {
                loginError: action.loginError
            });

        default:
            return state;
    }
}
