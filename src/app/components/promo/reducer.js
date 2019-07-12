import { constants as plan } from './plan/actions';
const DEFAULT = {
    data: [],
};

const getId = (item)=>(
    item.promoPlanId
);

const hasSameId = (item, item2)=> (
    getId(item) === getId(item2)
);

export const patchDefaultValues = (item)=>({
    // We aren't patching just yet, but keep this method for when we do
    ...item,
});


export default function reducer(state = DEFAULT, {type, payload}){
    switch (type) {
        case "CACHE_PROMOS":
            return Object.assign({}, state, {
                data: [...state.data, ...payload.data]
            });
        case plan.UPDATE_PROMO:
            return {...state, data: state.data.map(item => {
                return hasSameId(item, payload) ? patchDefaultValues(payload) : item;
            })};

        default:
            return state;
    }
}
