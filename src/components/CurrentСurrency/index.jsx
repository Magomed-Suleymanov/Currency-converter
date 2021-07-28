import React from 'react';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import SkeletonLoader from './SkeletonLoader';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  itemListCurrency: {
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '30px',
    borderBottom: '1px solid rgb(200, 200, 200)',
    padding: '5px 10px',
    alignItems: 'center',
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.012)',
      transition: '.07s',
      background: 'rgb(231,231,231)',
    },
  },
  boxName: {
    width: '230px',
    textAlign: 'left',
    color: 'rgb(0,44,137)',
  },
  headList: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '0px solid rgb(200, 200, 200)',
  },
  charCode: {
    color: 'rgb(0,44,137)',
  },
}));

function CurrentCurrency() {
  const loading = useSelector((state) => state.currentCurrency.loadingItems);
  const currency = useSelector((state) => state.currentCurrency.currency);

  const classes = useStyles();

  return (
    <Box>
      <Box paddingTop='10px'>
        <Box className={classes.headList}>
          <Box fontSize='20px' paddingLeft='10px'>
            Валюта
          </Box>
          <Box fontSize='20px'>Курс</Box>
          <Box fontSize='20px' width='280px' textAlign='center'>
            Страна
          </Box>
        </Box>
        {loading ? (
          <SkeletonLoader />
        ) : (
          currency.map((item, id) => {
            return (
              <Box key={id}>
                <Box className={classes.itemListCurrency}>
                  <Box className={classes.charCode}>{item.CharCode}</Box>
                  <Box
                    color={item.Value > item.Previous ? 'green' : 'red'}
                    textAlign='center'
                    width='100px'
                  >
                    {item.Value.toFixed(2)}
                  </Box>
                  <Box className={classes.boxName}>{item.Name}</Box>
                </Box>
              </Box>
            );
          })
        )}
      </Box>
    </Box>
  );
}

export default CurrentCurrency;
