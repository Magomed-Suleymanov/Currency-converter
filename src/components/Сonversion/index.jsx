import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapConversion: {
    alignItems: 'center',
    padding: '15px',
  },
  baseValute: {
    width: '680px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  exchangeCurrency: {
    width: '680px',
    marginTop: '10px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
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
    width: '200px',
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

  const [valueInputBase, setValueInputBase] = useState('');
  const [valueInputExchange, setValueInputExchange] = useState('');
  const [sum, setSum] = useState('');
  const [amount, setAmount] = useState('');



  const handleValueBase = (e) => {
    setValueInputBase(e.target.value);
  };

  const handleInputExchange = (e) => {
    setValueInputExchange(e.target.value);
  };

  const handleChangeSum = (e) => {
    setSum(e.target.value);
    setAmount((e.target.value * valueInputBase) / valueInputExchange);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
    setSum(e.target.value * valueInputExchange);
  };

  const ValueBaseValute = valueInputBase * sum;

  return (
    <Box className={classes.wrapConversion}>
      <Box className={classes.baseValute}>
        <input
          className={classes.input}
          type='number'
          placeholder='Базовая валюта'
          value={sum}
          onChange={handleChangeSum}
        />
        <select
          className={classes.select}
          value={valueInputBase}
          onChange={handleValueBase}
        >
          {currency.map((item) => {
            return (
              <option key={item.Name} value={item.Value}>
                {item.Name}
              </option>
            );
          })}
        </select>
        <Box width='200px' fontSize='18px'>
           <span>Валюта равна</span>
          <Box color='rgb(0,44,137)'>{`${ValueBaseValute.toFixed(2)} ₽`}</Box>
        </Box>
      </Box>
      <Box className={classes.exchangeCurrency}>
        <input
          className={classes.input}
          type='number'
          placeholder='Количество валюты за базовую'
          value={parseFloat(amount).toFixed(2)}
          onChange={handleAmount}
        />
        <select
          className={classes.select}
          value={valueInputExchange}
          onChange={handleInputExchange}
        >
          {currency.map((item) => {
            return (
              <option key={item.Name} value={item.Value}>
                {item.Name}
              </option>
            );
          })}
        </select>
        <Box width='200px' fontSize='18px'>
          Валюта обмена
        </Box>
      </Box>
    </Box>
  );
}

export default Conversion;
