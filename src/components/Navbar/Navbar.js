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
  Modal,
  Grid,
} from '@material-ui/core';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import useStyles from './NavStyles';
import MUIDrawer from './Drawer';
import ModalContainer from '../MdEditor/ModalContainer';

import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../redux/constants/actionConstants';
import { useWindowDimensions } from '../../Hooks/WindowSize';

const Navbar = ({ themeMode, lightMode, darkMode }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { width: windowWidth } = useWindowDimensions();
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // logout
  const logout = useCallback(() => {
    dispatch({ type: LOGOUT });
    history.push('/auth');
    setCurrentUser(null);
  }, [dispatch, history, setCurrentUser]);

  // render as soon as location changes
  useEffect(() => {
    const token = currentUser?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setCurrentUser(JSON.parse(localStorage.getItem('profile')));
  }, [location, logout, currentUser?.token]);

  const renderSmallScreen = () => (
    <MUIDrawer
      drawerElements={[
        <Button className={classes.NavItem} onClick={handleOpen}>
          <Typography variant='body2'>Create Post</Typography>
          <AddBoxRoundedIcon />
        </Button>,
        <Button
          color='inherit'
          className={classes.NavItem}
          onClick={themeMode === 'light' ? darkMode : lightMode}
        >
          <Typography variant='body2'>Toggle Theme</Typography>
          {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </Button>,
        <Button
          className={classes.NavItem}
          onClick={() => window.open('https://github.com/nikhilsourav/weebook-client', '_blank')}
        >
          <Typography variant='body2'>GitHub Repo</Typography>
          <GitHubIcon />
        </Button>,
        <Button className={classes.NavItem} onClick={logout}>
          <Typography variant='body2'>Sign out</Typography>
          <ExitToAppIcon />
        </Button>,
      ]}
    />
  );

  const renderLargeScreen = () => (
    <>
      <Tooltip title='create post'>
        <IconButton color='inherit' onClick={handleOpen}>
          <AddBoxRoundedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='toggle theme'>
        <IconButton color='inherit' onClick={themeMode === 'light' ? darkMode : lightMode}>
          {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Tooltip>
      <IconButton
        color='inherit'
        onClick={() => window.open('https://github.com/nikhilsourav/weebook-client', '_blank')}
      >
        <Tooltip title='GitHub repository'>
          <GitHubIcon />
        </Tooltip>
      </IconButton>
      <IconButton color='inherit' onClick={logout}>
        <Tooltip title='logout'>
          <ExitToAppIcon />
        </Tooltip>
      </IconButton>
    </>
  );

  const renderModal = () => (
    <Modal
      className={classes.Modal}
      open={open}
      onClose={handleClose}
      aria-labelledby='parent-modal-title'
      aria-describedby='parent-modal-description'
    >
      <Grid item xs={11} sm={8} md={6}>
        <ModalContainer />
      </Grid>
    </Modal>
  );

  return (
    <>
      <AppBar position='fixed'>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography className={classes.Heading} variant='h6'>
              weebook
            </Typography>
            {currentUser === null ? (
              <Button variant='outlined' component={Link} to='/auth' color='inherit'>
                Sign in
              </Button>
            ) : windowWidth < 500 ? (
              renderSmallScreen()
            ) : (
              renderLargeScreen()
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      {renderModal()}
    </>
  );
};

export default Navbar;
