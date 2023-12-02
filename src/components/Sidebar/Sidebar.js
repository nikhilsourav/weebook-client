import { Paper, Container } from '@material-ui/core';
import useStyles from './styles';
import Dev from './Dev/Dev';
import Form from './Form/Form';

const Sidebar = ({ currentId, setCurrentId }) => {
  const classes = useStyles();

  return (
    <Container className={classes.Sidebar}>
      <Paper className={classes.Paper}>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <Dev />
      </Paper>
    </Container>
  );
};

export default Sidebar;
