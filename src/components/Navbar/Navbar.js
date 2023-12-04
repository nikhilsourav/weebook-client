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

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const renderSmallScreen = () => (
    <MUIDrawer
      drawerElements={[
        <div className={classes.NavItem}>
          <Typography variant='body2'>Create Post</Typography>
          <Tooltip title='create post'>
            <IconButton color='inherit' onClick={handleOpen}>
              <AddBoxRoundedIcon />
            </IconButton>
          </Tooltip>
        </div>,
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
            <Tooltip title={currentUser?.result?.name}>
              <Avatar className={classes.Profile} alt={currentUser?.result?.name}>
                {currentUser?.result?.name.charAt(0)}
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
  );

  const renderLargeScreen = () => (
    <>
      <Tooltip title='create post'>
        <IconButton color='inherit' onClick={handleOpen}>
          <AddBoxRoundedIcon />
        </IconButton>
      </Tooltip>
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
      <Tooltip title={`signed in as ${currentUser?.result?.name}`}>
        <IconButton color='inherit'>
          <Avatar className={classes.Profile} alt={currentUser?.result?.name}>
            {currentUser?.result?.name.charAt(0)}
          </Avatar>
        </IconButton>
      </Tooltip>
      <Tooltip title='logout'>
        <IconButton color='inherit' onClick={logout}>
          <ExitToAppIcon />
        </IconButton>
      </Tooltip>
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
