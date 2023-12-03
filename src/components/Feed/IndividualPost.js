import { Card, Typography, Button, CardContent, CardActions, Tooltip } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './IndividualPostStyles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../redux/actions/posts';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Extract date from _id as createdAt is unreliable
  const dateFromObjectId = (objectId) => new Date(parseInt(objectId.substring(0, 8), 16) * 1000);

  // Get user from localStorage
  const user = JSON.parse(localStorage.getItem('profile'));

  // Check if the current user is the creator of the post
  const isCurrentUserCreator = user?.result?.sub === post.creator;

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.HeadWrapper}>
          <div className={classes.Info}>
            <Typography className={classes.Name}>{post.name}</Typography>
            <Typography className={classes.CreatedAt}>
              {moment(dateFromObjectId(post._id)).fromNow()}
            </Typography>
          </div>
          <div>
            {isCurrentUserCreator && (
              <Button className={classes.Edit} onClick={() => setCurrentId(post._id)}>
                <Tooltip title='edit'>
                  <MoreHorizIcon />
                </Tooltip>
              </Button>
            )}
          </div>
        </div>
        <Typography className={classes.Title} variant='h5' component='h2'>
          {post.title}
        </Typography>
        <Typography className={classes.Content}>{post.content}</Typography>
      </CardContent>
      <CardActions className={classes.Actions}>
        <Typography>
          <Button disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
            <Tooltip title='like'>
              <FavoriteIcon />
            </Tooltip>
          </Button>
          &nbsp;
          {post.likes.length}
        </Typography>
        {isCurrentUserCreator && (
          <Button onClick={() => dispatch(deletePost(post._id))}>
            <Tooltip title='delete'>
              <DeleteIcon />
            </Tooltip>
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
