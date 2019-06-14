import { constants as c } from './actions'

// export function login(email, password) {
//     return dispatch => {
//         dispatch(setLoginPending(true));
//         dispatch(setLoginSuccess(false));
//         dispatch(setLoginError(null));
//
//         callLoginApi(email, password, error => {
//             dispatch(setLoginPending(false));
//             if (!error) {
//                 dispatch(setLoginSuccess(true));
//             } else {
//                 dispatch(setLoginError(error));
//             }
//         });
//     }
// }
//
//
//
// function callLoginApi(email, password, callback) {
//     setTimeout(() => {
//         if (email === 'admin@example.com' && password === 'admin') {
//             return callback(null);
//         } else {
//             return callback(new Error('Invalid email and password'));
//         }
//     }, 1000);
// }

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
