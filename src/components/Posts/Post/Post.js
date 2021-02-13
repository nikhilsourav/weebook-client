// mui imports
import { Card, Typography, Button, CardContent, CardActions, Tooltip } from '@material-ui/core';
// mui icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// moment js
import moment from 'moment';

// styles
import useStyles from './styles';

const Post = ({ post }) => {
  // mui
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.HeadWrapper}>
          <div className={classes.Info}>
            <Typography className={classes.Name}>{post.creator}</Typography>
            <Typography className={classes.CreatedAt}>
              {moment(post.createdAt).fromNow()}
            </Typography>
          </div>
          <div>
            <Button className={classes.Edit}>
              <Tooltip title='edit'>
                <MoreHorizIcon />
              </Tooltip>
            </Button>
          </div>
        </div>
        <Typography className={classes.Title} variant='h5' component='h2'>
          {post.title}
        </Typography>
        <Typography className={classes.Content}>{post.content}</Typography>
      </CardContent>
      <CardActions className={classes.Actions}>
        <Typography>
          <Button>
            <Tooltip title='like'>
              <FavoriteIcon />
            </Tooltip>
          </Button>
          &nbsp;
          {post.likeCount}
        </Typography>
        <Button>
          <Tooltip title='delete'>
            <DeleteIcon />
          </Tooltip>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
