import ActionTypes from '../actions/action-types';

//-------------------------------------------------------------------
// LOGIN REDUCER
//-------------------------------------------------------------------
/* eslint-disable indent, complexity */
export default function reducer(state = false, {type, payload}) {

    switch (type) {
        case ActionTypes.LOGIN_FULFILLED:
            return true;
        case ActionTypes.LOGIN_ERROR:
            return false;
        case ActionTypes.LOGOUT:
            return false;

        default:
            return payload && /(401|403)/.test(payload.status) ? false : state;
    }
};
