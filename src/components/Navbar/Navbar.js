// mui imports
import { AppBar, Toolbar, Typography, Container, Tooltip, IconButton } from '@material-ui/core';
// mui icons
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import GitHubIcon from '@material-ui/icons/GitHub';
// styles
import useStyles from './styles';

const Navbar = ({ themeMode, lightMode, darkMode }) => {
  // mui
  const classes = useStyles();
  return (
    <>
      <AppBar position='fixed'>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography className={classes.Heading} variant='h6'>
              what I think . . .
            </Typography>
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
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
