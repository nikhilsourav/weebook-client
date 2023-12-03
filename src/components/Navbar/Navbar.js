import { useState, useEffect, useCallback } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
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

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from './NavStyles';
import MUIDrawer from './Drawer';

import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../redux/constants/actionConstants';

const Navbar = ({ themeMode, lightMode, darkMode }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  // logout
  const logout = useCallback(() => {
    dispatch({ type: LOGOUT });
    history.push('/auth');
    setUser(null);
  }, [dispatch, history, setUser]);

  // render as soon as location changes
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, logout, user?.token]);

  // Window's dimensions
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  };
  const { width } = useWindowDimensions();

  return (
    <>
      <AppBar position='fixed'>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography className={classes.Heading} variant='h6'>
              weebook
            </Typography>
            {user ? (
              width < 500 ? (
                <MUIDrawer
                  drawerElements={[
                    <div className={classes.NavItem}>
                      <Typography variant='body2'>Toggle Theme</Typography>
                      {themeMode === 'light' ? (
                        <IconButton onClick={darkMode} color='inherit'>
                          <Brightness4Icon />
                        </IconButton>
                      ) : (
                        <IconButton onClick={lightMode} color='inherit'>
                          <Brightness7Icon />
                        </IconButton>
                      )}
                    </div>,
                    <div className={classes.NavItem}>
                      <Typography variant='body2'>GitHub repository</Typography>
                      <a
                        href='https://github.com/nikhilsourav/weebook-client'
                        target='_blank'
                        rel='noreferrer'
                        className={classes.Link}
                      >
                        <IconButton color='inherit'>
                          <GitHubIcon />
                        </IconButton>
                      </a>
                    </div>,
                    <div className={classes.NavItem}>
                      <Typography variant='body2'>signed in as</Typography>
                      <IconButton>
                        <Tooltip title={user?.result?.name}>
                          <Avatar className={classes.Profile} alt={user?.result?.name}>
                            {user?.result?.name.charAt(0)}
                          </Avatar>
                        </Tooltip>
                      </IconButton>
                    </div>,
                    <div className={classes.NavItem}>
                      <Typography variant='body2'>Sign out</Typography>
                      <IconButton color='inherit' onClick={logout}>
                        <ExitToAppIcon />
                      </IconButton>
                    </div>,
                  ]}
                />
              ) : (
                <>
                  <Tooltip title='toggle theme'>
                    {themeMode === 'light' ? (
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
                    <a
                      href='https://github.com/nikhilsourav/weebook-client'
                      rel='noreferrer'
                      target='_blank'
                      className={classes.Link}
                    >
                      <IconButton color='inherit'>
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                  <Tooltip title={`signed in as ${user?.result?.name}`}>
                    <IconButton color='inherit'>
                      <Avatar className={classes.Profile} alt={user?.result?.name}>
                        {user?.result?.name.charAt(0)}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='logout'>
                    <IconButton color='inherit' onClick={logout}>
                      <ExitToAppIcon />
                    </IconButton>
                  </Tooltip>
                </>
              )
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
