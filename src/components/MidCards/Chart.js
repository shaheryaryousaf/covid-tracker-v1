import React, { useEffect, useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import covidContext from "../../context/covidContext";
import Loader from "../layout/Loader";

import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        boxShadow: 'none',
    },
    card: {
        borderRadius: '0px',
    },
}));

const Chart = () => {
    const classes = useStyles();

    const context = useContext(covidContext);
    const { stats, fetchStats, loading } = context;

    useEffect(() => {
        fetchStats();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <Loader />
    }
    const data = {
        labels: [stats.name],
        datasets: [
            {
                label: 'Total Cases',
                backgroundColor: '#808080',
                borderColor: '#808080',
                borderWidth: 1,
                hoverBackgroundColor: 'r#808080',
                hoverBorderColor: '#808080',
                data: [stats.total]
            },
            {
                label: 'Recovered',
                backgroundColor: '#FF7F0E',
                borderColor: '#FF7F0E',
                borderWidth: 1,
                hoverBackgroundColor: '#FF7F0E',
                hoverBorderColor: '#FF7F0E',
                data: [stats.recovered]
            },
            {
                label: 'Active Cases',
                backgroundColor: '#3DACF8',
                borderColor: '#3DACF8',
                borderWidth: 1,
                hoverBackgroundColor: '#3DACF8',
                hoverBorderColor: '#3DACF8',
                data: [stats.active]
            },
            {
                label: 'Deaths',
                backgroundColor: '#CD2057',
                borderColor: '#CD2057',
                borderWidth: 1,
                hoverBackgroundColor: '#CD2057',
                hoverBorderColor: '#CD2057',
                data: [stats.deaths]
            },
        ]
    };

    return (
        <Paper className={classes.paper}>
            <Card variant="outlined" className={classes.card}>
                <CardContent>
                    <Bar data={data} />
                </CardContent>
            </Card>
        </Paper>
    );
}

export default Chart;