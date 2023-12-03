import { useState, useEffect } from 'react';
import { TextField, Button, Typography, Tooltip, IconButton, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ClearAllIcon from '@material-ui/icons/ClearAll';

import useStyles from './ModalContentStyles';
import { createPost, updatePost } from '../../redux/actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userFromLocalStorage = JSON.parse(localStorage.getItem('profile'));
  const selectedPost = useSelector((state) =>
    currentId ? state.posts.find((post) => post._id === currentId) : null
  );

  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    if (selectedPost) setFormData(selectedPost);
  }, [selectedPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = { ...formData, name: userFromLocalStorage?.result?.name };
    currentId ? dispatch(updatePost(currentId, updatedData)) : dispatch(createPost(updatedData));
    clearForm();
  };

  const clearForm = () => {
    setFormData({ title: '', content: '' });
    setCurrentId(null);
  };

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
        Drop a note
        <Tooltip title='clear form data' placement='top-start'>
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
        placeholder={`What's in your mind ${userFromLocalStorage?.result?.given_name} ? 💭`}
        multiline
        minRows={6}
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
      />
      <Tooltip title={currentId ? 'Update this!' : 'Post this!'} placement='top'>
        <Button className={classes.ButtonSubmit} color='primary' variant='contained' type='submit'>
          {currentId ? 'UPDATE' : 'POST'}
        </Button>
      </Tooltip>
    </form>
  );
};

export default Form;