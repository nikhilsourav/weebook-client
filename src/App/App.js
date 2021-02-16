// React imports
import React, { useState } from 'react';
// mui imports
import { Container, Paper, Grid, ThemeProvider, createMuiTheme } from '@material-ui/core';
// mui color
import blue from '@material-ui/core/colors/blue';

// styles
import useStyles from './styles';
// Navbar component
import Navbar from '../components/Navbar/Navbar';
// Posts component
import Posts from '../components/Posts/Posts';
// Sidebar component
import Sidebar from '../components/Sidebar/Sidebar';
// Footer
import Footer from '../components/Footer/Footer';

// Redux imports
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// Redux actions
import { getPosts } from '../redux/actions/posts';

const App = () => {
  // mui
  const classes = useStyles();
  const [theme, setTheme] = useState(createMuiTheme({ palette: { primary: blue, type: 'light' } }));
  const handleTheme = () => {
    setTheme(createMuiTheme({ palette: { primary: blue, type: 'dark' } }));
  };

  // prop drilling for update
  const [currentId, setCurrentId] = useState(null);

  // redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Container className={classes.Container}>
          <Navbar handleTheme={handleTheme} />
          <Grid container className={classes.GridContainer}>
            <Grid item xs={12} sm={7} md={8}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={5} md={4}>
              <Sidebar currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
