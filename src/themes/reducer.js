import { constants as c } from './actions'

const DEFAULT = {
    active: 0,
    list: [
        { name: 'light' },
        { name: 'dark'  },
        { name: 'blue'  },
        { name: 'green'  },
    ]
};

export default function reducer(state = DEFAULT, action){
    switch(action.type){
        case c.SET_THEME:
            return {
                ...state,
                active: action.id
             };
        default: return state
    }
}
