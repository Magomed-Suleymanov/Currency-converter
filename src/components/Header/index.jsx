import React from 'react';
import Box from '@material-ui/core/Box';
import MoneyIcon from '@material-ui/icons/Money';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  nav: {
    boxShadow: '0px 0px 4px 2px rgb(200, 200, 200)',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  boxLink: {
    textAlign: 'center',
    color: 'white',

    '&:hover': {
      color: 'red',
    },
  },
}));
function Header() {
  const classes = useStyles();

  return (
    <Box marginBottom="10px">
      <AppBar position="static">
        <Box padding="10px 0px" display="flex" justifyContent={'space-evenly'}>
          <Link to="/" className={classes.link}>
            <Box className={classes.boxLink}>
              <AttachMoneyIcon />
              <Box>Текущий курс</Box>
            </Box>
          </Link>
          <Link to="/Conversion" className={classes.link}>
            <Box className={classes.boxLink}>
              <MoneyIcon />
              <Box>Конвертирование</Box>
            </Box>
          </Link>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Header;
