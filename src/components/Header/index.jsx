import React from 'react';
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MoneyIcon from '@material-ui/icons/Money';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  nav: {
    boxShadow: '0px 0px 4px 2px rgb(200, 200, 200)',
  },
}));
function Header() {
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  return (
    <Box sx={{ width: 800 }}>
      <BottomNavigation
        className={classes.nav}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Текущий курс"
          icon={<AttachMoneyIcon />}
          component={NavLink}
          to="/"
        />
        <BottomNavigationAction
          label="Конвертирование"
          icon={<MoneyIcon />}
          component={NavLink}
          to="/Conversion"
        />
      </BottomNavigation>
    </Box>
  );
}

export default Header;
