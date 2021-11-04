
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import GlobalStyles from './components/styles/global';
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}


function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />

    </>
  );
}

export default App;
