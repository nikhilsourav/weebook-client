// mui imports
import { Paper, Typography } from '@material-ui/core';
// styles
import useStyles from './styles';
// mui render skeleton
import Skeleton from '@material-ui/lab/Skeleton';

// Post component
import Post from './Post/Post';

// redux
import { useSelector } from 'react-redux';

const Posts = ({ currentId, setCurrentId }) => {
  // mui
  const classes = useStyles();
  // redux
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <div>
      <Typography className={classes.Skeleton}>
        {' '}
        <Skeleton className={classes.SkeletonItem} variant='rect' width='30%' height={15} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='100%' height={30} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='100%' height={80} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='30%' height={20} />
        <Skeleton className={classes.SkeletonItem} variant='circle' width={30} height={30} />
      </Typography>
      <Typography className={classes.Skeleton}>
        {' '}
        <Skeleton className={classes.SkeletonItem} variant='rect' width='30%' height={15} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='100%' height={30} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='100%' height={80} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='30%' height={20} />
        <Skeleton className={classes.SkeletonItem} variant='circle' width={30} height={30} />
      </Typography>
      <Typography className={classes.Skeleton}>
        {' '}
        <Skeleton className={classes.SkeletonItem} variant='rect' width='30%' height={15} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='100%' height={30} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='100%' height={80} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='30%' height={20} />
        <Skeleton className={classes.SkeletonItem} variant='circle' width={30} height={30} />
      </Typography>
    </div>
  ) : (
    <Paper className={classes.Posts}>
      {posts.map((post) => (
        <Post key={post._id} post={post} currentId={currentId} setCurrentId={setCurrentId} />
      ))}
    </Paper>
  );
};

export default Posts;
