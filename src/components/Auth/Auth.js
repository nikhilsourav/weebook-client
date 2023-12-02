import jwt_decode from 'jwt-decode';
import LockOutlined from '@material-ui/icons/LockOutlined';
import Icon from './icon';
import { useHistory } from 'react-router-dom';
import { Container, Avatar, Button, Typography, Paper, Grid } from '@material-ui/core';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { AUTH } from '../../redux/constants/actionConstants';

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // successful login
  const googleSuccess = (res) => {
    const token = res?.credential;
    const result = jwt_decode(token);
    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  // login failure
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
        <form className={classes.form}>
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
