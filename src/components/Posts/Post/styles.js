import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    height: '100%',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    position: 'relative',
    '&:hover': {
      boxShadow: '7px 7px 15px -4px rgba(0,0,0,0.5)',
    },
  },
  HeadWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  Info: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  Name: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    marginRight: '20px',
  },
  CreatedAt: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('sm')]: {
      marginTop: '10px',
    },
  },
  Edit: {
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      right: '-12px',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  },
  Title: {
    margin: '25px 0',
    fontWeight: 'bold',
  },
  Content: {
    wordSpacing: '2px',
  },
  Actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  SkeletonItem: {
    marginTop: '10px',
  },
}));
