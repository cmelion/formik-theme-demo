// import { constants as c } from './actions';
const DEFAULT = {
    data: [],
};

export default function reducer(state = DEFAULT, {type, payload}){
    switch (type) {
        case "CACHE_PROMOS":
            return Object.assign({}, state, {
                data: [...state.data, ...payload.data]
            });
        default:
            return state;
    }
}
