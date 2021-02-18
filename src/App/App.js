// React imports
import React, { useState } from 'react';

// React router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// mui theme
import { Paper, ThemeProvider, createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

// components
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Auth from '../components/Auth/Auth';
import Footer from '../components/Footer/Footer';

const App = () => {
  // mui theme
  const [themeMode, setThemeMode] = useState('dark');
  const theme = createMuiTheme({ palette: { primary: blue, type: themeMode } });
  const lightMode = () => {
    setThemeMode('light');
  };
  const darkMode = () => {
    setThemeMode('dark');
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Paper>
          <Navbar themeMode={themeMode} lightMode={lightMode} darkMode={darkMode} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/auth' exact component={Auth} />
          </Switch>
          <Footer />
        </Paper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
