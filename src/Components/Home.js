import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

function Home() {
  const classes = useStyles()
  let img = "https://images.complex.com/complex/images/c_crop,h_980,w_1500,x_0,y_20/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/xqd1hirdexd00bq404jh/supreme-nike-air-max-96-collection?fimg-client-default";
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h3><strong>We’ve extended our returns period to 60 days.</strong></h3></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <img src={img} alt={"Nike banner"} width="100%" height="auto"/>
              </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;