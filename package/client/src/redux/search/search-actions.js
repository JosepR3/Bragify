import api from "../../api";

import { getCurrentUserToken } from "../../services/auth";

import {
    SET_RESULTS

} from './search-types';

export function search(data) {
    console.log(data)
    return async function createThunk(dispatch) {
        try {
            console.log(data)
            const res = await dispatch(searchAuth(api.search, data));
            console.log(res.data)
            dispatch(setResults(res.data));
        } catch (error) {
            console.log(error, "searchError");
        }
    };
}

export function setResults(data) {
    return {
        type: SET_RESULTS,
        payload: data
    };
}

export function searchAuth(action, data) {
    console.log(data)
    return async function createThunk() {
        const token = await getCurrentUserToken();
        console.log(token)
        const response = await action(
            {
                Authorization: `Bearer ${token}`,
            },
            data,
        );
        return response.data;
    };
}