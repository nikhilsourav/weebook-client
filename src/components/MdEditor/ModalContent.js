import { useState, useEffect } from 'react';
import { TextField, Button, Typography, Tooltip, IconButton, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ClearAllIcon from '@material-ui/icons/ClearAll';

import useStyles from './ModalContentStyles';
import { createPost, updatePost } from '../../redux/actions/posts';
import { SET_CURRENT_USER_ID } from '../../redux/constants/actionConstants';
import { useCalcRows } from '../../Hooks/WindowSize';

const Form = () => {
  const { minRows, maxRows } = useCalcRows();
  const classes = useStyles();
  const dispatch = useDispatch();
  const userFromLocalStorage = JSON.parse(localStorage.getItem('profile'));
  const currentUserId = useSelector((state) => state.user.currentUserId);
  const [formData, setFormData] = useState({ title: '', content: '' });

  const selectedPost = useSelector((state) =>
    currentUserId ? state.posts.find((post) => post._id === currentUserId) : null
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = { ...formData, name: userFromLocalStorage?.result?.name };
    currentUserId
      ? dispatch(updatePost(currentUserId, updatedData))
      : dispatch(createPost(updatedData));
    clearForm();
  };

  const clearForm = () => {
    setFormData({ title: '', content: '' });
    dispatch({ type: SET_CURRENT_USER_ID, payload: null });
  };

  useEffect(() => {
    if (selectedPost) setFormData(selectedPost);
  }, [selectedPost]);

  if (!userFromLocalStorage?.result?.name) {
    return (
      <Paper className={classes.SignIn}>
        <Typography>Please sign in</Typography>
      </Paper>
    );
  }

  return (
    <form
      autoComplete='off'
      noValidate
      className={`${classes.root} ${classes.Form}`}
      onSubmit={handleSubmit}
    >
      <Typography variant='h6' className={classes.FormHeading}>
        Write something
        <Tooltip title='reset' placement='top-start'>
          <IconButton className={classes.Clear} onClick={clearForm}>
            <ClearAllIcon />
          </IconButton>
        </Tooltip>
      </Typography>
      <TextField
        name='title'
        variant='outlined'
        label='title'
        fullWidth
        placeholder={`Add a title..`}
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <TextField
        name='content'
        variant='outlined'
        label='content'
        fullWidth
        placeholder={`What's on your mind ${userFromLocalStorage?.result?.given_name} ? 💭`}
        multiline
        minRows={minRows}
        maxRows={maxRows}
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
      />
      <Tooltip title={currentUserId ? 'Update this!' : 'Post this!'} placement='top'>
        <Button className={classes.ButtonSubmit} color='primary' variant='contained' type='submit'>
          {currentUserId ? 'UPDATE' : 'POST'}
        </Button>
      </Tooltip>
    </form>
  );
};

export default Form;
