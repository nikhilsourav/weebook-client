// mui imports
import { Avatar, Tooltip, IconButton } from '@material-ui/core';
// dev img
import dev from '../../../images/Dev.jpg';
// styles
import useStyles from './styles';

const Dev = () => {
  // mui
  const classes = useStyles();
  return (
    <>
      <Tooltip title='Developer: Nikhil Sourav' placement='top'>
        <IconButton className={classes.Dev}>
          <Avatar alt='Nikhil Sourav' src={dev} />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default Dev;
