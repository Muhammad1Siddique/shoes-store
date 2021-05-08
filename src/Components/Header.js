import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:'white',
    textDecoration: 'none',
    textAlign: 'center',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.title}>Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/about" className={classes.title}>About</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/shop" className={classes.title}>Shop</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to="/contact" className={classes.title}>Contact</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
