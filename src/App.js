import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'

// import { MyContext } from "./components/MyContext";

function App() {
  return (
    // <MyContext.Provider>
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>

    // </MyContext.Provider>
  );
}

export default App;
