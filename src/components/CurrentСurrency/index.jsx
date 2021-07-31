import React from 'react';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import SkeletonLoader from './SkeletonLoader';
import { makeStyles } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  itemListCurrency: {
    minHeight: '30px',
    display: 'flex',
    justifyContent: 'space-between',
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
    fontSize: '20px',
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
      <Box>
        <Box className={classes.headList}>
          <Box paddingLeft="10px">Валюта</Box>
          <Box>Курс</Box>
          <Box width="290px" textAlign="center">
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
                  <Box width="40px" className={classes.charCode}>
                    {item.CharCode}
                  </Box>
                  <Box
                    color={item.Value > item.Previous ? 'green' : 'red'}
                    textAlign="center"
                    width="80px"
                    display="flex"
                    alignItems="center"
                  >
                    <Box display="flex" width="48px">
                      {item.Value.toFixed(2)}
                    </Box>
                    {item?.Value > item.Previous ? (
                      <ArrowDropUpIcon />
                    ) : (
                      <ArrowDropDownIcon />
                    )}
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
