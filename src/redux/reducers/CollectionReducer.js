import { UPDATE_COLLECTIONS } from '../actions/types';


const INITIAL_STATE = {
    data: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_COLLECTIONS:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};