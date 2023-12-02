import { Avatar, Tooltip, IconButton } from '@material-ui/core';
import devImage from '../../../images/Dev.jpg';
import useStyles from './styles';

const Dev = () => {
  const classes = useStyles();

  return (
    <Tooltip title='Developer: Nikhil Sourav' placement='top'>
      <IconButton className={classes.Dev}>
        <Avatar alt='Nikhil Sourav' src={devImage} />
      </IconButton>
    </Tooltip>
  );
};

export default Dev;
