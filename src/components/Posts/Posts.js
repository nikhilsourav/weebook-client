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
  console.log(posts); // initially post = [] is rendered then original one from db

  return !posts.length ? (
    <div>
      <Typography>
        {' '}
        <Skeleton className={classes.SkeletonItem} variant='rect' width='30%' height={20} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='100%' height={60} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='100%' height={200} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='30%' height={20} />
        <Skeleton className={classes.SkeletonItem} variant='circle' width={50} height={50} />
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
