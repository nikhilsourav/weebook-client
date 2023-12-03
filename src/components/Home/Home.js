import { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './HomeStyles';
import Posts from '../Feed/PostsFeed';
import { getPosts } from '../../redux/actions/posts';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container className={classes.Container}>
      <Grid container className={classes.GridContainer}>
        <Grid item xs={12} sm={7} md={8}>
          <Posts />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
