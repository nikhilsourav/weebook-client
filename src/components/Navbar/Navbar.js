// mui imports
import { AppBar, Toolbar, Typography, Container, Tooltip, IconButton } from '@material-ui/core';
// mui icons
import Brightness4Icon from '@material-ui/icons/Brightness4';
import GitHubIcon from '@material-ui/icons/GitHub';
// styles
import useStyles from './styles';

const Navbar = (props) => {
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
            <Tooltip title='switch theme'>
              <IconButton onClick={props.handleTheme} color='inherit'>
                <Brightness4Icon />
              </IconButton>
            </Tooltip>
            <Tooltip title='see the repo'>
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
