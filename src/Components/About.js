import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 50,
      marginBottom:50,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));


export const About = ()=>{
    const classes = useStyles();
    let image = "https://static.nike.com/a/images/w_1920,c_limit/214ae7ad-555b-4c11-9e83-28d017b28a72/where-can-i-learn-more-about-nike-inc.jpg";
    let nike = "https://www.nike.com/help/static/swoosh.png";
    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <h2><strong>About Us</strong></h2>
                    <p>Here at Nike, we're dedicated to creating an inclusive and sustainable future through relentless innovation. We aim to inspire every athlete to reach their potential. Check out the resources below to learn more about the business of Nike.</p>
                    <h4>Contact Us</h4>
                    <p>Please note deliveries are currently taking longer than usual. To check the status of an order, please visit your orders page. Thank you for your patience.</p>
                    <img src={nike} alt="nike logo"/>
                    <h4>Our Mission</h4>
                    <p><q>To bring inspiration and innovation to every athlete* in the world.</q></p>
                </Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}><img src={image} alt="nike shoes" width="100%" height="auto"/></Paper>
                </Grid>
            </Grid>
        </div>
    )
}


