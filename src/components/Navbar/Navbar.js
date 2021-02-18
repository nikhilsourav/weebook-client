// React imports
import React, { useState, useEffect } from 'react';
// React router
import { Link, useHistory, useLocation } from 'react-router-dom';
// mui imports
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Tooltip,
  IconButton,
  Button,
  Avatar,
} from '@material-ui/core';

// mui icons
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// styles
import useStyles from './styles';

// redux
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../redux/constants/actionConstants';

const Navbar = ({ themeMode, lightMode, darkMode }) => {
  // mui
  const classes = useStyles();
  // redux
  const dispatch = useDispatch();
  // history
  const history = useHistory();
  // location
  const location = useLocation();
  // user
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  // logout
  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push('/auth');
    setUser(null);
  };

  // render on location change
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  // popover

  return (
    <>
      <AppBar position='fixed'>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography className={classes.Heading} variant='h6'>
              what I think . . .
            </Typography>
            {user ? (
              <>
                <Tooltip title='toggle theme'>
                  {themeMode == 'light' ? (
                    <IconButton onClick={darkMode} color='inherit'>
                      <Brightness4Icon />
                    </IconButton>
                  ) : (
                    <IconButton onClick={lightMode} color='inherit'>
                      <Brightness7Icon />
                    </IconButton>
                  )}
                </Tooltip>
                <Tooltip title='GitHub repository'>
                  <IconButton color='inherit'>
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title={user.result.name}>
                  <IconButton color='inherit'>
                    <Avatar
                      className={classes.Profile}
                      alt={user.result.name}
                      src={user.result.imageUrl}
                    >
                      {user.result.name.charAt(0)}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Tooltip title='logout'>
                  <IconButton color='inherit' onClick={logout}>
                    <ExitToAppIcon />
                  </IconButton>
                </Tooltip>
              </>
            ) : (
              <Button variant='outlined' component={Link} to='/auth' color='inherit'>
                Sign in
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
