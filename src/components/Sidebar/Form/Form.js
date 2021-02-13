// mui imports
import { TextField, Button, Typography, Tooltip } from '@material-ui/core';
// styles
import useStyles from './styles';

const Form = () => {
  // mui
  const classes = useStyles();

  const handleSubmit = () => {};
  return (
    <>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.Form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6' className={classes.FormHeading}>
          Post an Opinion
        </Typography>
        <TextField
          name='title'
          variant='outlined'
          label='title'
          fullWidth
          placeholder='add a title.. you can do this! 🙂'
        />
        <TextField
          name='content'
          variant='outlined'
          label='content'
          fullWidth
          placeholder="what's in your mind? 💭"
          multiline
          rows={6}
        />
        <Tooltip title='post this!' placement='top'>
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
