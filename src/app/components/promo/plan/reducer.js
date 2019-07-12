import { constants as c } from './actions'


const getId = (item)=>(
    item.promoPlanId
);

const hasSameId = (item, item2)=> (
    getId(item) === getId(item2)
);

export const patchDefaultValues = (item)=>({
        ...item,
});

export default function reducer(state = {}, action, payload) {
    switch (action.type) {
        case c.UPDATE_PROMO:
            return state.map(item => {
                return hasSameId(item, payload) ? patchDefaultValues(payload) : item;
            });

        default:
            return state;
    }
}
