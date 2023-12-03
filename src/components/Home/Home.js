import { useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './HomeStyles';
import Posts from '../Feed/PostsFeed';
import ModalContainer from '../MdEditor/ModalContainer';
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
        <Grid item xs={12} sm={5} md={4}>
          <ModalContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
