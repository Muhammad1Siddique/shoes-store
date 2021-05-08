import React from 'react';
import {useParams} from 'react-router-dom';
import Shoes from './shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:'4%',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      margin: '2%',
      padding: '100px',
      height:'65%',
    }
  }));

export const Details = ()=>{
    const classes = useStyles();
    const {productID} = useParams();
    const product = Shoes[productID];
    const {name, price, descrips, img} = product;

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <img src={img} alt={name} width="100%" height="auto"/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <h3>{name}</h3>
                        <h2><strong>Rs. {price}</strong></h2>
                        <p>{descrips}</p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}