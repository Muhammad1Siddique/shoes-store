import React from 'react';
import {Link} from 'react-router-dom';
import Shoes from './shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '5%',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginTop: 30,
      textDecoration:'none',
    },
  }));

export const Products = ()=>{

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
            {Object.entries(Shoes).map(([productID,{name, price, img}]) => 
                (
                <Grid item xs={3}>
                <Paper className={classes.paper} key={productID}>
                <Link to={productID} className={classes.paper}>
                    <img src={img} alt={name} width="auto" height="200"/>
                    <h3>{name}</h3>
                    <h2><strong>Rs. {price}</strong></h2>
                    </Link>
                </Paper>
                </Grid>
                 )
                 )}
            </Grid>
        </div>
    )
}

