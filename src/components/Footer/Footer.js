import { Paper, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();
  const location = useLocation();
  const greetingText =
    location.pathname === '/auth' ? 'Hey there friendly citizen!' : 'Wow! You scroll too much!';

  return (
    <Paper elevation={8}>
      <Typography className={classes.BottomGreet} variant='h6'>
        {greetingText}
      </Typography>
    </Paper>
  );
};

export default Footer;
