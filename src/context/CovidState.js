import React, { useReducer } from "react";
import { FETCH_STATS, GET_COUNTRY_STATS, SET_LOADING } from "./types";
import axios from "axios";
import covidContext from "./covidContext";
import covidReducer from "./covidReducer";

const CovidState = props => {

    const initialState = {
        stats: {},
        countryStats: [],
        loading: false
    }

    const URL = "https://coronavirus-19-api.herokuapp.com/countries";

    const [state, dispatch] = useReducer(covidReducer, initialState);

    const fetchStats = async (country) => {

        let changeURL = URL;

        setLoading();

        if (country) {
            changeURL = `${URL}/${country}`;
        } else {
            changeURL = `${URL}/world`;
        }

        const res = await axios.get(changeURL)
        dispatch({
            type: FETCH_STATS,
            payload: {
                name: res.data.country,
                total: res.data.cases,
                active: res.data.active,
                recovered: res.data.recovered,
                deaths: res.data.deaths,
                todayCases: res.data.todayCases,
                todayDeaths: res.data.todayDeaths,
                critical: res.data.critical,
                casesPerOneMillion: res.data.casesPerOneMillion,
                deathsPerOneMillion: res.data.deathsPerOneMillion,
            }
        })
    }

    const getCountryStats = async () => {
        setLoading();
        const res = await axios.get("https://coronavirus-19-api.herokuapp.com/countries")
        dispatch({
            type: GET_COUNTRY_STATS,
            payload: res.data.map(country => (
                {
                    name: country.country,
                    total: country.cases,
                    active: country.active,
                    recovered: country.recovered,
                    deaths: country.deaths,
                    todayCases: country.todayCases,
                    todayDeaths: country.todayDeaths,
                    critical: country.critical,
                    casesPerOneMillion: country.casesPerOneMillion,
                    deathsPerOneMillion: country.deathsPerOneMillion,
                }
            ))
        })
    }

    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    return (<covidContext.Provider value={{
        stats: state.stats,
        countryStats: state.countryStats,
        loading: state.loading,
        fetchStats,
        getCountryStats
    }}>{props.children}</covidContext.Provider>)

}

export default CovidState;