// mui imports
import { Paper, Typography } from '@material-ui/core';
// styles
import useStyles from './styles';

const Footer = () => {
  // mui
  const classes = useStyles();
  return (
    <Paper elevation={8}>
      <Typography className={classes.BottomGreet} variant='h6'>
        wow you reached the bottom!
      </Typography>
    </Paper>
  );
};

export default Footer;
