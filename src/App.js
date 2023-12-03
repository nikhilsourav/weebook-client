import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Paper, ThemeProvider, createTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Footer from './components/Footer/Footer';

// Greetings
const greetVisitor = () => {
  console.log(
    '%c Thanks for visiting!',
    'font-weight: bold; font-size: 20px; background-color: #2196f3; border-radius: 5px; padding: 10px; text-shadow: 2px 2px  rgba(0,0,0,0.5)'
  );
};

// Theme settings
const useTheme = () => {
  const [themeMode, setThemeMode] = useState('dark');
  const theme = createTheme({ palette: { primary: blue, type: themeMode } });
  const toggleLightMode = () => setThemeMode('light');
  const toggleDarkMode = () => setThemeMode('dark');
  return { themeMode, theme, toggleLightMode, toggleDarkMode };
};

const App = () => {
  greetVisitor();
  const { themeMode, theme, toggleLightMode, toggleDarkMode } = useTheme();

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Paper>
            <Navbar themeMode={themeMode} lightMode={toggleLightMode} darkMode={toggleDarkMode} />
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
