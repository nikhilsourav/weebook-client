import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  Heading: {
    flexGrow: 1,
    fontFamily: 'Roboto',
    color: 'rgba(255,255,250,1)',
  },
  Profile: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
  },
  NavItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    minWidth: '160px',
    minHeight: '50px',
  },
  Modal: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
