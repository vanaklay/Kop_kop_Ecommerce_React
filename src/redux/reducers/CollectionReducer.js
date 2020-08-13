import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from '../actions/types';


const INITIAL_STATE = {
    data: null,
    isFetching: false,
    errorMessage: undefined
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_COLLECTIONS_START:
            return { ...state, isFetching: true };
        case FETCH_COLLECTIONS_SUCCESS:
            return { ...state, isFetching: false , data: action.payload };
        case FETCH_COLLECTIONS_FAILURE:
            return { ...state, isFetching: false , errorMessage: action.payload}
        default:
            return state;
    }
};