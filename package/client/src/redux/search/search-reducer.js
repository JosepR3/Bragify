import {
    SEARCH_CONTENT,
    SET_RESULTS,
    EMPTY_SEARCH
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
            state.results = [];
            return {
                ...state,
                results: action.payload
            };

        case EMPTY_SEARCH:
            return {
                state
            }
        default:
            return state;
    }
}

export default searchReducer;