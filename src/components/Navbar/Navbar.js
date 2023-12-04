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
import { useDispatch, useSelector } from 'react-redux';
import {
  LOGOUT,
  INITIATE_POST_EDIT,
  POST_CLICKED,
  FAB_CLICKED,
} from '../../redux/constants/actionConstants';
import { useWindowDimensions } from '../../Hooks/WindowSize';

const Navbar = ({ themeMode, lightMode, darkMode }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasRendered, setHasRendered] = useState(false);
  const { width: windowWidth } = useWindowDimensions();
  const { hasSelectedEditMode, hasClickedPostBtn, hasClickedFab } = useSelector(
    (state) => state.user
  );
  const [userFromLocalStorage, setUserFromLocalStorage] = useState(
    JSON.parse(localStorage.getItem('profile'))
  );

  // modal operations
  const handleOpen = useCallback(() => {
    setIsModalOpen(true);
    dispatch({ type: POST_CLICKED, payload: false });
    dispatch({ type: FAB_CLICKED, payload: false });
  }, [dispatch, setIsModalOpen]);

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
    dispatch({ type: INITIATE_POST_EDIT, payload: false });
  }, [dispatch, setIsModalOpen]);

  // logout
  const logout = useCallback(() => {
    dispatch({ type: LOGOUT });
    history.push('/auth');
    setUserFromLocalStorage(null);
  }, [dispatch, history, setUserFromLocalStorage]);

  // render as soon as location changes
  useEffect(() => {
    const token = userFromLocalStorage?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
    setUserFromLocalStorage(JSON.parse(localStorage.getItem('profile')));
  }, [location, logout, userFromLocalStorage?.token]);

  // handle modal open/close as edit button is clicked by user
  useEffect(() => {
    if (hasRendered) hasSelectedEditMode ? handleOpen() : handleClose();
    else setHasRendered(true);
  }, [hasSelectedEditMode, handleOpen, handleClose, hasRendered]);

  // handle modal open/close as post/update btn is clicked by user
  useEffect(() => {
    if (hasClickedPostBtn) handleClose();
    else handleOpen();
  }, [hasClickedPostBtn, handleOpen, handleClose]);

  // handle modal open/close as floating action btn is clicked by user
  useEffect(() => {
    if (hasClickedFab) handleOpen();
    else handleOpen();
  }, [hasClickedFab, handleOpen, handleClose]);

  const renderSmallScreen = () => (
    <MUIDrawer
      drawerElements={[
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
      open={isModalOpen}
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
            {userFromLocalStorage === null ? (
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
