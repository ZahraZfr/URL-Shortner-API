
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import GlobalStyles from './components/styles/global';
import Dark from "./components/Dark"
// import { ThemeProvider } from "styled-components";

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
  // const [theme , setTheme] = useState("light")
  return (
    <>
      <GlobalStyles />
      <Dark/>
      <Header />
      <Main />
      <Footer />

    </>
  );
}

export default App;
