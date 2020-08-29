import React from 'react';
import CountriesList from "./CountriesList";
import Chart from "./Chart";

import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: '30px'
    }
}));

const MidCards = () => {
    const classes = useStyles();
    return (
        <div>
            <Container fixed maxWidth="xl" className={classes.container}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xl={3} md={3} sm={12} xs={12}>
                            <CountriesList />
                        </Grid>
                        <Grid item xl={9} md={9} sm={12} xs={12}>
                            <Chart />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default MidCards;
