import React, { useEffect, useContext } from 'react';
import CountUp from "react-countup";
import covidContext from "../../context/covidContext";
import Loader from "../layout/Loader";

import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: "100%",
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 650,
    },
    paper: {
        boxShadow: 'none',
    },
    card: {
        borderRadius: '0px',
    },
    list: {
        padding: 0
    },
    tr: {
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: "#f7f7f7"
        }
    }
}));

const CountriesList = () => {
    const classes = useStyles();

    const context = useContext(covidContext);
    const { countryStats, getCountryStats, fetchStats, loading } = context;

    useEffect(() => {
        getCountryStats();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <Loader />
    }

    const rowClick = (e, name) => {
        e.preventDefault();
        fetchStats(name)
    }

    return (
        <Paper className={classes.paper}>
            <Typography className={classes.pos} variant="h6" component="h2">Countries List</Typography>
            <Card variant="outlined" className={classes.card}>
                <CardContent className={classes.list}>
                    <TableContainer className={classes.root} component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Country</TableCell>
                                    <TableCell align="right">Cases</TableCell>
                                    <TableCell align="right">Deaths</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {countryStats.map((country, id) => (
                                    <TableRow key={id} className={classes.tr} onClick={e => rowClick(e, country.name)}>
                                        <TableCell align="left">{country.name}</TableCell>
                                        <TableCell align="right">
                                            <CountUp start={0} end={country.total} separator="," duration={1.5} />
                                        </TableCell>
                                        <TableCell align="right">
                                            <CountUp start={0} end={country.deaths} separator="," duration={1.5} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Paper>
    );
}

export default CountriesList;
