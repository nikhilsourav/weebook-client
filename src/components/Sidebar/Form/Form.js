// React imports
import { useState } from 'react';
// mui imports
import { TextField, Button, Typography, Tooltip, IconButton } from '@material-ui/core';
// mui icons
import ClearAllIcon from '@material-ui/icons/ClearAll';

// styles
import useStyles from './styles';
// redux
import { useDispatch } from 'react-redux';
import { createPost } from '../../../redux/actions/posts';

const Form = () => {
  // mui
  const classes = useStyles();

  // Form
  const [postData, setPostData] = useState({ creator: '', title: '', content: '' });

  // redux dispatch
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {
    setPostData({ creator: '', title: '', content: '' });
  };

  return (
    <>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.Form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6' className={classes.FormHeading}>
          My Opinion
          <Tooltip title='clear form data' placement='top-start'>
            <IconButton className={classes.Clear} onClick={clear}>
              <ClearAllIcon />
            </IconButton>
          </Tooltip>
        </Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='creator'
          fullWidth
          placeholder='I am known as 😎...'
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField
          name='title'
          variant='outlined'
          label='title'
          fullWidth
          placeholder={
            postData.creator
              ? ` ${postData.creator} plz add a title.. 😊`
              : `add a title.. you can do this! 🙂`
          }
          value={postData.title}
          onChange={(e) =>
            setPostData({ creator: 'anonymous', ...postData, title: e.target.value })
          }
        />
        <TextField
          name='content'
          variant='outlined'
          label='content'
          fullWidth
          placeholder={
            postData.creator
              ? `what's in your mind ${postData.creator}? 💭`
              : `what's in your mind? 💭`
          }
          multiline
          rows={6}
          value={postData.content}
          onChange={(e) =>
            setPostData({ creator: 'anonymous', ...postData, content: e.target.value })
          }
        />
        <Tooltip title='yes post this!' placement='top'>
          <Button
            className={classes.ButtonSubmit}
            color='primary'
            variant='contained'
            type='submit'
          >
            Post
          </Button>
        </Tooltip>
      </form>
    </>
  );
};

export default Form;
