import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapConversion: {
    alignItems: 'center',
    padding: '30px',
  },
  baseValute: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '550px',
    margin: 'auto',
  },
  exchangeCurrency: {
    marginTop: '10px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '550px',
    margin: 'auto',
  },
  input: {
    width: '250px',
    height: '20px',
    fontSize: '15px',
    color: 'rgb(94,94,94)',
    padding: '5px',
    borderRadius: '5px',
    outline: 'none',
    border: '1px solid gray',
  },
  select: {
    width: '100px',
    height: '32px',
    padding: '5px',
    borderRadius: '5px',
    outline: 'none',
    border: '1px solid gray',
  },
}));

function Conversion() {
  const currency = useSelector((state) => state.currentCurrency.currency);

  const classes = useStyles();

  console.log(currency);

  return (
    <Box className={classes.wrapConversion}>
      <Box className={classes.baseValute}>
        <input className={classes.input} type="number" />
        <select className={classes.select}>
          <option>RUB</option>
        </select>
        <Box fontSize="20px" className="base">
          Базовая валюта
        </Box>
      </Box>
      <Box className={classes.exchangeCurrency}>
        <input className={classes.input} type="number" />
        <select className={classes.select}>
          <option>RUB</option>
        </select>
        <Box marginRight="7px" fontSize="20px" className="base">
          Валюта обмена
        </Box>
      </Box>
    </Box>
  );
}

export default Conversion;
