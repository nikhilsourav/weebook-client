import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './FloatingActBtnStyles';
import { useDispatch } from 'react-redux';
import { FAB_CLICKED } from '../../redux/constants/actionConstants';

const FloatingActionButton = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: FAB_CLICKED, payload: true });
  };

  return (
    <Fab color='primary' className={classes.Container} onClick={handleClick}>
      <AddIcon />
    </Fab>
  );
};

export default FloatingActionButton;
