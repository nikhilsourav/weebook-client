// React imports
import { useState, useEffect } from 'react';
// mui imports
import { TextField, Button, Typography, Tooltip, IconButton, Paper } from '@material-ui/core';
// mui icons
import ClearAllIcon from '@material-ui/icons/ClearAll';

// styles
import useStyles from './styles';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../../redux/actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  // mui
  const classes = useStyles();

  // Form
  const [postData, setPostData] = useState({ title: '', content: '' });

  // find post on click
  const post = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );

  // populate form value after post found
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  // get user from local storage
  const user = JSON.parse(localStorage.getItem('profile'));

  // redux dispatch
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
    }
    clear();
  };
  const clear = () => {
    setPostData({ title: '', content: '' });
    setCurrentId(null);
  };
  // no user?
  if (!user?.result?.name) {
    return (
      <Paper className={classes.SignIn}>
        <Typography>Please sign in</Typography>
      </Paper>
    );
  }
  return (
    <>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.Form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6' className={classes.FormHeading}>
          Drop a note
          <Tooltip title='clear form data' placement='top-start'>
            <IconButton className={classes.Clear} onClick={clear}>
              <ClearAllIcon />
            </IconButton>
          </Tooltip>
        </Typography>
        <TextField
          name='title'
          variant='outlined'
          label='title'
          fullWidth
          placeholder={
            user?.result?.givenName
              ? ` ${user?.result?.givenName} plz add a title.. 😊`
              : `add a title.. you can do this! 🙂`
          }
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name='content'
          variant='outlined'
          label='content'
          fullWidth
          placeholder={
            user?.result?.givenName
              ? `what's in your mind ${user?.result?.givenName}? 💭`
              : `what's in your mind? 💭`
          }
          multiline
          rows={6}
          value={postData.content}
          onChange={(e) => setPostData({ ...postData, content: e.target.value })}
        />
        <Tooltip title={currentId ? `update this!` : `post this!`} placement='top'>
          <Button
            className={classes.ButtonSubmit}
            color='primary'
            variant='contained'
            type='submit'
          >
            {currentId ? `UPDATE` : `POST`}
          </Button>
        </Tooltip>
      </form>
    </>
  );
};

export default Form;
