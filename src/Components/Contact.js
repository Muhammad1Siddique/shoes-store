import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const useStyle = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '60%',
      },
    },
  }));

export const Contact = ()=>{
    const classes = useStyles();
    const classes1 = useStyle();
    return(
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <h2 style={{color:'black'}}>SEND MESSAGE</h2>
            <form className={classes1.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Enter Name" variant="outlined" />
                <TextField id="outlined-basic" label="Enter Email" variant="outlined" />
                <TextField id="outlined-basic" label="write your message" variant="outlined" />
                <Button variant="contained" color="secondary">Submit</Button>
            </form>
            </Paper>
          </Grid>
         
        </Grid>
      </div>
    )
}





