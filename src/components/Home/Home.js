// React imports
import { useState } from 'react';
// mui imports
import { Container, Grid } from '@material-ui/core';

// styles
import useStyles from './styles';

// Posts component
import Posts from '../Posts/Posts';
// Sidebar component
import Sidebar from '../Sidebar/Sidebar';

// Redux imports
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// Redux actions
import { getPosts } from '../../redux/actions/posts';

const Home = () => {
  // mui
  const classes = useStyles();

  // prop drilling for update
  const [currentId, setCurrentId] = useState(null);

  // redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container className={classes.Container}>
      <Grid container className={classes.GridContainer}>
        <Grid item xs={12} sm={7} md={8}>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Sidebar currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
