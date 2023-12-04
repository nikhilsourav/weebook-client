import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  Container: {
    position: 'fixed',
    bottom: '50px',
    right: '50px',
    display: 'none',
    [theme.breakpoints.down(500)]: {
      display: 'flex',
    },
  },
}));
