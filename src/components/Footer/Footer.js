// React router
import { useLocation } from 'react-router-dom';
// mui imports
import { Paper, Typography } from '@material-ui/core';
// styles
import useStyles from './styles';

const Footer = () => {
  // mui
  const classes = useStyles();
  // location
  const location = useLocation();
  return (
    <>
      {location.pathname == '/auth' ? (
        <Paper elevation={8}>
          <Typography className={classes.BottomGreet} variant='h6'>
            Hey there friendly citizen!
          </Typography>
        </Paper>
      ) : (
        <Paper elevation={8}>
          <Typography className={classes.BottomGreet} variant='h6'>
            wow! you scroll too much!
          </Typography>
        </Paper>
      )}
    </>
  );
};

export default Footer;
