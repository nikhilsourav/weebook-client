/*
 * Container for ModalContent
 */
import { Paper, Container } from '@material-ui/core';
import useStyles from './ModalContainerStyles';
import Form from './ModalContent';

const ModalContainer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.ModalContainer}>
      <Paper className={classes.Paper}>
        <Form />
      </Paper>
    </Container>
  );
};

export default ModalContainer;
