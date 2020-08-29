import React, { Fragment, useEffect, useContext } from "react";
import covidContext from "../../context/covidContext";
import Loader from "../layout/Loader";
import styles from "./TopCards.module.css";
import CountUp from "react-countup";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 8,
  },
  card: {
    borderRadius: '0px'
  }
}));

const TopCards = () => {
  const classes = useStyles();

  const context = useContext(covidContext);
  const { stats, fetchStats, loading } = context;
  const { active, total, recovered, deaths, name } = stats;

  useEffect(() => {
    fetchStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading || active === undefined) {
    return <Loader />
  }

  return (
    <Fragment>
      <Container fixed maxWidth="xl" className={styles.container}>
        <Typography className={classes.pos} variant="h5">{name} Report of Covid 19</Typography>
        <div className={classes.root}>
          <Grid container spacing={3}>

            <Grid item xl={3} md={3} sm={6} xs={12}>
              <Paper className={classes.paper}>
                <Card variant="outlined" className={classes.card}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Total Cases
                    </Typography>
                    <Typography className={classes.pos} variant="h5" component="h2">
                      <CountUp state={0} end={total} separator="," duration={2.5} />
                    </Typography>
                    <Typography variant="body2" component="p">
                      Total Cases of Covid-19
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>

            <Grid item xl={3} md={3} sm={6} xs={12}>
              <Paper className={classes.paper}>
                <Paper className={classes.paper}>
                  <Card variant="outlined" className={classes.card}>
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Active Cases
                    </Typography>
                      <Typography className={classes.pos} variant="h5" component="h2">
                        <CountUp state={0} end={active} separator="," duration={2.5} />
                      </Typography>
                      <Typography variant="body2" component="p">
                        Active Cases of Covid-19
                    </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Paper>
            </Grid>
            <Grid item xl={3} md={3} sm={6} xs={12}>
              <Paper className={classes.paper}>
                <Paper className={classes.paper}>
                  <Card variant="outlined" className={classes.card}>
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Recovered
                    </Typography>
                      <Typography className={classes.pos} variant="h5" component="h2">
                        <CountUp state={0} end={recovered} separator="," duration={2.5} />
                      </Typography>
                      <Typography variant="body2" component="p">
                        Recoveries from Covid-19
                    </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Paper>
            </Grid>
            <Grid item xl={3} md={3} sm={6} xs={12}>
              <Paper className={classes.paper}>
                <Paper className={classes.paper}>
                  <Card variant="outlined" className={classes.card}>
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Deaths
                    </Typography>
                      <Typography className={classes.pos} variant="h5" component="h2">
                        <CountUp state={0} end={deaths} separator="," duration={2.5} />
                      </Typography>
                      <Typography variant="body2" component="p">
                        Deaths Due to Covid-19
                    </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Fragment>
  );
};

export default TopCards;
