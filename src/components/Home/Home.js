import { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import Posts from '../Posts/Posts';
import Sidebar from '../Sidebar/Sidebar';
import { getPosts } from '../../redux/actions/posts';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);

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
