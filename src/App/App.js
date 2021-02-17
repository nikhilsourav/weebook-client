// React imports
import React, { useState } from 'react';

// mui theme
import { Paper, ThemeProvider, createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';

// components
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home';
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
    <ThemeProvider theme={theme}>
      <Paper>
        <Navbar themeMode={themeMode} lightMode={lightMode} darkMode={darkMode} />
        <Home />
        <Footer />
      </Paper>
    </ThemeProvider>
  );
};

export default App;
