// React imports
import { useState, useEffect } from 'react';
// React router
import { Link } from 'react-router-dom';
// mui imports
import { AppBar, Toolbar, Typography, Container, Tooltip, IconButton, Button, Avatar} from '@material-ui/core';

// mui icons
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import GitHubIcon from '@material-ui/icons/GitHub';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// styles
import useStyles from './styles';

const Navbar = ({ themeMode, lightMode, darkMode }) => {
  // mui
  const classes = useStyles();

  // user
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user);

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, []);

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
                <Tooltip title='logout'>
                  <IconButton color='inherit'>
                    <ExitToAppIcon />
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
