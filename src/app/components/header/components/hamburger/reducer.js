import { constants as c } from './actions'

//-------------------------------------------------------------------
// CSS HAMBURGER MENU REDUCER
//-------------------------------------------------------------------
/* eslint-disable indent */
const reducer = (state = {isActive: false, target: undefined}, {type, payload}) => {

    switch (type) {
        case c.TOGGLE_HAMBURGER:
            return {isActive: payload.isActive, target: payload.target};

        default:
            return state;
    }
};

export default reducer;
