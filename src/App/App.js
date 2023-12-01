// React imports
import React, { useState } from 'react';

// React router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Google login
import { GoogleOAuthProvider } from '@react-oauth/google';

// mui theme
import { Paper, ThemeProvider, createTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

// components
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
import Auth from '../components/Auth/Auth';
import Footer from '../components/Footer/Footer';

const App = () => {
  // mui theme
  const [themeMode, setThemeMode] = useState('dark');
  const theme = createTheme({ palette: { primary: blue, type: themeMode } });
  const lightMode = () => {
    setThemeMode('light');
  };
  const darkMode = () => {
    setThemeMode('dark');
  };

  // greetings
  console.log(
    '%c Thanks for visiting! Have a wonderful day! 🙂',
    'font-weight: bold; font-size: 20px; background-color: #2196f3; border-radius: 5px; padding: 10px; text-shadow: 2px 2px  rgba(0,0,0,0.5)'
  );

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
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
    </GoogleOAuthProvider>
  );
};

export default App;
