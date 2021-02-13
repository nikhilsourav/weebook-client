import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  Sidebar: {
    height: 'max(81vh, 500px)',
    width: '90%',
    padding: '15px',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      width: '100%',
      height: '500px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    position: 'relative',
  },
  Paper: {
    height: '100%',
  },
}));
