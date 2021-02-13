// mui imports
import { Paper } from '@material-ui/core';
// styles
import useStyles from './styles';

// Post component
import Post from './Post/Post';

const Posts = () => {
  // mui
  const classes = useStyles();
  return (
    <Paper className={classes.Posts}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Paper>
  );
};

export default Posts;
