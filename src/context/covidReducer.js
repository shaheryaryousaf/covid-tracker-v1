import { FETCH_STATS, GET_COUNTRY_STATS, SET_LOADING } from "./types";

export default function (state, action) {

    const { type, payload } = action;
    switch (type) {
        case FETCH_STATS:
            return {
                ...state,
                stats: payload,
                loading: false
            }
        case GET_COUNTRY_STATS:
            return {
                ...state,
                countryStats: payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }

}