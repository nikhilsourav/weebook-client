import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  Container: {
    height: '100%',
    outline: 'none',
    position: 'relative',
    maxWidth: '1100px',
    overflowX: 'hidden',
    [theme.breakpoints.down('xs')]: {
      padding: '0',
    },
  },
  GridContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '20px 0',
    padding: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      alignItems: 'stretch',
      flexGrow: 1,
    },
  },
}));
