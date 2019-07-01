//-------------------------------------------------------------------
// INFO REDUCER
//-------------------------------------------------------------------
/* eslint-disable indent */
import { constants as c } from './actions'

export const info = (state = {version: 'loading...'}, {type, payload}) => {

    switch (type) {
        case c.LOAD_INFO_FULFILLED:
            return payload;

        default:
            return state;
    }
};
