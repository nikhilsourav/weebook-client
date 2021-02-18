import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  AuthBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'max(80vh, 600px)',
  },
  paper: {
    width: '100%',
    height: 'auto',
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: 'fit-content',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));
