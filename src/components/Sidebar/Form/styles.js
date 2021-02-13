import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(0.7),
      marginRight: theme.spacing(0.7),
    },
  },
  Form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  FormHeading: {
    margin: '15px 0',
  },
  Clear: {
    position: 'absolute',
    top: '22px',
    right: '25px',
  },
  ButtonSubmit: {
    marginBottom: 10,
  },
}));
