/*
 * Container for ModalContent
 */
import { Paper, Container } from '@material-ui/core';
import useStyles from './ModalContainerStyles';
import Form from './ModalContent';

const Sidebar = ({ currentId, setCurrentId }) => {
  const classes = useStyles();

  return (
    <Container className={classes.Sidebar}>
      <Paper className={classes.Paper}>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
      </Paper>
    </Container>
  );
};

export default Sidebar;
