import { constants as c } from './actions';

export default function reducer(state = {}, {type, payload}){
    switch (type) {
        case c.LOGIN_ERROR:
            return {};
        case c.LOGOUT:
            return {};
        case c.LOGIN_FULFILLED:
            return {...payload.user, token: payload.token};
        default:
            return state;
    }
}
