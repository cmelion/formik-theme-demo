// import { constants as c } from './actions';
const DEFAULT = {
    currentPage: 0,
    data: [],
};

export default function reducer(state = DEFAULT, {type, payload}){
    switch (type) {
        case "CACHE_PROMOS":
            return Object.assign({}, state, {
                currentPage: payload.page,
                data: [...state.data, ...payload.data]
            });
        default:
            return state;
    }
}
