import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  Heading: {
    flexGrow: 1,
    fontFamily: 'Montserrat',
    color: 'rgba(255,255,250,1)',
  },
  Profile: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  NavItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Link: {
    textDecoration: 'none',
    color: '#ffffff',
    WebkitTapHighlightColor: 'transparent',
    [theme.breakpoints.down('500')]: {
      color: 'inherit'
    },
  },
}));
