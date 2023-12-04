import { Card, Typography, Button, CardContent, CardActions, Tooltip } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';

import useStyles from './IndividualPostStyles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../redux/actions/posts';
import { INITIATE_POST_EDIT, SET_CURRENT_USER_ID } from '../../redux/constants/actionConstants';

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userFromLocalStoratge = JSON.parse(localStorage.getItem('profile'));
  const isCurrentUserCreator = userFromLocalStoratge?.result?.sub === post.creator;

  const extractDateFromObj = () => {
    return new Date(parseInt(post._id.substring(0, 8), 16) * 1000);
  };
  const handleEdit = () => {
    dispatch({ type: SET_CURRENT_USER_ID, payload: post._id });
    dispatch({ type: INITIATE_POST_EDIT, payload: true });
  };
  const handleLike = () => {
    dispatch(likePost(post._id));
  };
  const handleDelete = () => {
    dispatch(deletePost(post._id));
    dispatch({ type: SET_CURRENT_USER_ID, payload: null });
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.HeadWrapper}>
          <div className={classes.Info}>
            <Typography className={classes.Name}>{post.name}</Typography>
            <Typography className={classes.CreatedAt}>
              {moment(extractDateFromObj()).fromNow()}
            </Typography>
          </div>
          <div>
            {isCurrentUserCreator && (
              <Button className={classes.Edit} onClick={handleEdit}>
                <Tooltip title='edit'>
                  <EditIcon />
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
          <Button disabled={!userFromLocalStoratge?.result} onClick={handleLike}>
            <Tooltip title='like'>
              <FavoriteIcon />
            </Tooltip>
          </Button>
          &nbsp;
          {post.likes.length}
        </Typography>
        {isCurrentUserCreator && (
          <Button onClick={handleDelete}>
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
