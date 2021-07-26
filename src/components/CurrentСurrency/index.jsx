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
    background: 'whitesmoke',
    marginBottom: '3px',
    padding: '5px 10px',
    alignItems: 'center',
    cursor: 'pointer',

    '&:hover': {
      transform: 'scale(1.015)',
      transition: '.08s',
    },
  },
  boxName: {
    width: '250px',
    textAlign: 'left',
  },
  headList: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5px',
    padding: '10px 0px ',
    borderBottom: '1px solid rgb(200, 200, 200)',
  },
}));

function CurrentCurrency() {
  const currency = useSelector((state) =>
    state.currentCurrency.items.map((items) => items.Valute),
  );
  const loading = useSelector((state) => state.currentCurrency.loadingItems);

  const classes = useStyles();

  console.log(currency);

  return (
    <Box>
      {loading ? (
        <SkeletonLoader />
      ) : (
        currency.map((item, id) => {
          return (
            <Box key={id}>
              <Box className={classes.headList}>
                <Box fontSize="20px" paddingLeft="10px">
                  Валюта
                </Box>
                <Box fontSize="20px">Номинал</Box>
                <Box fontSize="20px" width="290px" textAlign="center">
                  Страна
                </Box>
              </Box>
              <Box className={classes.itemListCurrency}>
                <Box>{item.USD.CharCode}</Box>
                <Box textAlign="center" width="100px">
                  {item.USD.Value.toFixed(2)}
                </Box>
                <Box className={classes.boxName}>{item.USD.Name}</Box>
              </Box>
              <Box className={classes.itemListCurrency}>
                <Box>{item.BYN.CharCode}</Box>
                <Box>{item.BYN.Value.toFixed(2)}</Box>
                <Box className={classes.boxName}>{item.BYN.Name}</Box>
              </Box>
              <Box className={classes.itemListCurrency}>
                <Box>{item.AUD.CharCode}</Box>
                <Box>{item.AUD.Value.toFixed(2)}</Box>
                <Box className={classes.boxName}>{item.AUD.Name}</Box>
              </Box>
              <Box className={classes.itemListCurrency}>
                <Box>{item.EUR.CharCode}</Box>
                <Box>{item.EUR.Value.toFixed(2)}</Box>
                <Box className={classes.boxName}>{item.EUR.Name}</Box>
              </Box>
              <Box className={classes.itemListCurrency}>
                <Box>{item.RON.CharCode}</Box>
                <Box>{item.RON.Value.toFixed(2)}</Box>
                <Box className={classes.boxName}>{item.RON.Name}</Box>
              </Box>
              <Box className={classes.itemListCurrency}>
                <Box>{item.TMT.CharCode}</Box>
                <Box>{item.TMT.Value.toFixed(2)}</Box>
                <Box className={classes.boxName}>{item.TMT.Name}</Box>
              </Box>
              <Box className={classes.itemListCurrency}>
                <Box>{item.UAH.CharCode}</Box>
                <Box>{item.UAH.Value.toFixed(2)}</Box>
                <Box className={classes.boxName}>{item.UAH.Name}</Box>
              </Box>
              <Box className={classes.itemListCurrency}>
                <Box>{item.SGD.CharCode}</Box>
                <Box>{item.SGD.Value.toFixed(2)}</Box>
                <Box className={classes.boxName}>{item.SGD.Name}</Box>
              </Box>
              <Box className={classes.itemListCurrency}>
                <Box>{item.MDL.CharCode}</Box>
                <Box>{item.MDL.Value.toFixed(2)}</Box>
                <Box className={classes.boxName}>{item.MDL.Name}</Box>
              </Box>
              <Box className={classes.itemListCurrency}>
                <Box>{item.KGS.CharCode}</Box>
                <Box>{item.KGS.Value.toFixed(2)}</Box>
                <Box className={classes.boxName}>{item.KGS.Name}</Box>
              </Box>
              <Box className={classes.itemListCurrency}>
                <Box>{item.JPY.CharCode}</Box>
                <Box>{item.JPY.Value.toFixed(2)}</Box>
                <Box className={classes.boxName}>{item.JPY.Name}</Box>
              </Box>
              <Box className={classes.itemListCurrency}>
                <Box>{item.GBP.CharCode}</Box>
                <Box>{item.GBP.Value.toFixed(2)}</Box>
                <Box className={classes.boxName}>{item.GBP.Name}</Box>
              </Box>
            </Box>
          );
        })
      )}
    </Box>
  );
}

export default CurrentCurrency;
