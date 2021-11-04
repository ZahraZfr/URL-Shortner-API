import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/Theme';
import { GlobalStyles } from './components/global';
import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';

// const LightTheme = {
//   pageBackground: "white",
//   titleColor: "#dc658b",
//   tagLineColor: "black"
// };

// const DarkTheme = {
//   pageBackground: "#282c36",
//   titleColor: "lightpink",
//   tagLineColor: "lavender"
// }

// const themes = {
//   light: LightTheme,
//   dark: DarkTheme,
// }


function App() {
  const [theme, setTheme] = useState('light');
// The function that toggles between themes
const toggleTheme = () => {
  // if the theme is not light, then set it to dark
  if (theme === 'light') {
    setTheme('dark');
  // otherwise, it should be light
  } else {
    setTheme('light');
  }
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
      <GlobalStyles />
      <Header />
      <NavigationBar/>
      <button className='themeBTN' onClick={toggleTheme}> ☀︎  /  ☽ </button>
      <Main />
      <Footer />

    </>
    </ThemeProvider>
  );
}

export default App;


//☀︎ ☽