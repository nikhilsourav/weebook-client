// mui imports
import { Paper, Container } from '@material-ui/core';
// styles
import useStyles from './styles';
// Dev component
import Dev from './Dev/Dev';
// Form component
import Form from './Form/Form';

const Sidebar = () => {
  // mui
  const classes = useStyles();
  return (
    <Container className={classes.Sidebar}>
      <Paper className={classes.Paper}>
        <Form />
        <Dev />
      </Paper>
    </Container>
  );
};

export default Sidebar;
