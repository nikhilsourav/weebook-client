import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  BottomGreet: {
    width: 'fit-content',
    display: 'block',
    margin: 'auto',
    ...theme.typography.button,
    backgroundColor: theme.palette.background.main,
    padding: theme.spacing(4),
  },
}));
