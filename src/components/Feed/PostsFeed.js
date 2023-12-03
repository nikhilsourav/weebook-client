/*
 * Container for IndividualPost
 */
import { Paper, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';

import Post from './IndividualPost';
import useStyles from './PostsFeedStyles';

const SkeletonLoader = () => {
  const classes = useStyles();

  const renderSkeletonItem = () => (
    <>
      <Skeleton className={classes.SkeletonItem} variant='rect' width='30%' height={15} />
      <Skeleton className={classes.SkeletonItem} variant='rect' width='100%' height={30} />
      <Skeleton className={classes.SkeletonItem} variant='rect' width='100%' height={80} />
      <Skeleton className={classes.SkeletonItem} variant='rect' width='30%' height={20} />
      <Skeleton className={classes.SkeletonItem} variant='circle' width={30} height={30} />
    </>
  );

  return (
    <div>
      {[1, 2, 3].map((key) => (
        <Typography key={key} className={classes.Skeleton}>
          {renderSkeletonItem()}
        </Typography>
      ))}
    </div>
  );
};

const Posts = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <SkeletonLoader />
  ) : (
    <Paper className={classes.Posts}>
      {posts.map((post) => (
        <Post key={post._id} post={post} currentId={currentId} setCurrentId={setCurrentId} />
      ))}
    </Paper>
  );
};

export default Posts;
