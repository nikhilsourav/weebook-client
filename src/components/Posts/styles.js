import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  Posts: {
    backgroundColor: theme.palette.primary.main,
    padding: '15px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  SkeletonItem: {
    marginTop: '10px',
  },
}));
