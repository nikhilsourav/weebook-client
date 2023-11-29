// React router
import { useHistory } from 'react-router-dom';

// mui imports
import { Container, Avatar, Button, Typography, Paper, Grid } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

// mui icons
import LockOutlined from '@material-ui/icons/LockOutlined';

// redux constatns
import { AUTH } from '../../redux/constants/actionConstants';

// styles
import useStyles from './styles';

// google svg icon
import Icon from './icon';

// redux
import { useDispatch } from 'react-redux';

const Auth = () => {
  // mui
  const classes = useStyles();

  // redux
  const dispatch = useDispatch();

  // history
  const history = useHistory();

  // form submit
  const handleSubmit = () => {};

  // success
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  // failure
  const googleFailure = () => {
    console.log(`Google sign in was unsuccessful`);
  };

  return (
    <Container component='main' maxWidth='xs' className={classes.AuthBody}>
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant='h5'>Sign in</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENT_ID}
              render={(renderProps) => (
                <Button
                  color='primary'
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                  variant='contained'
                >
                  Google sign in
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy='single_host_origin'
            />
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
