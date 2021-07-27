import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Header from '../Header';
import CurrentCurrency from '../CurrentСurrency';
import { Route, Switch } from 'react-router-dom';
import Conversion from '../Сonversion';
import { useDispatch } from 'react-redux';
import { loadingCurrency } from '../../redux/actions/currentCurrency';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  app: {
    position: 'absolute',
    left: 'calc(50% - 400px)',
    margin: 'auto',
    border: '1px solid whitesmoke',
    borderRadius: '3px',
    overflow: 'hidden',
    boxShadow: '0px 0px 6px 1px rgb(200, 200, 200)',
    width: '800px',
    fontFamily: 'Roboto, sans-serif',
    listStyle: 'none',
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingCurrency());
  }, [dispatch]);

  return (
    <Box className={classes.app}>
      <Header />
      <Switch>
        <Route exact path="/" component={CurrentCurrency} />
        <Route path="/Conversion" component={Conversion} />
      </Switch>
    </Box>
  );
}

export default App;
