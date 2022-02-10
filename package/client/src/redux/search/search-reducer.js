import {
    SEARCH_CONTENT,
    SET_RESULTS
} from './search-types';

import initialState from './search-state';

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_CONTENT:
            return {
                ...state,
                searchContent: action.payload
            };
        case SET_RESULTS:
            return {
                ...state,
                results: action.payload
            };
        default:
            return state;
    }
}

export default searchReducer;