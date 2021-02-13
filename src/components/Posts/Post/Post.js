// mui imports
import { Card, Typography, Button, CardContent, CardActions, Tooltip } from '@material-ui/core';
// mui icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// mui render skeleton
import Skeleton from '@material-ui/lab/Skeleton';
// styles
import useStyles from './styles';

const Post = () => {
  // mui
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.HeadWrapper}>
          <div className={classes.Info}>
            <Typography className={classes.Name}>Willium olajide olatunji</Typography>
            <Typography className={classes.CreatedAt}>58 minutes ago</Typography>
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
          Title is like heading got it?
        </Typography>
        <Typography className={classes.Content}>
          This is the content of this post like it? This is the content of this post like it? This
          is the content of this post like it? This is the content of this post like it? This is the
          content of this post like it? This is the content of this post like it? This is the
          content of this post like it? This is the content of this post like it? This is the
          content of this post like it? This is the content of this post like it? This is the
          content of this post like it? 🧡🧡
        </Typography>
      </CardContent>
      <CardActions className={classes.Actions}>
        <Button>
          <Tooltip title='like'>
            <FavoriteIcon />
          </Tooltip>
        </Button>
        <Button>
          <Tooltip title='delete'>
            <DeleteIcon />
          </Tooltip>
        </Button>
      </CardActions>

      {/* Render skeleton */}
      {/* <Typography>
        {' '}
        <Skeleton className={classes.SkeletonItem} variant='rect' width='30%' height={20} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='100%' height={60} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='100%' height={200} />
        <Skeleton className={classes.SkeletonItem} variant='rect' width='30%' height={20} />
        <Skeleton className={classes.SkeletonItem} variant='circle' width={50} height={50} />
      </Typography> */}
    </Card>
  );
};

export default Post;
