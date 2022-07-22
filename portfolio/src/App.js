import Navigation from "./componets/Navigation";
import About from "./componets/About ";
import Home from "./componets/Home"
import Header from "./componets/Header";
import Contact from "./componets/Contact";
// import About from "./componets/About "
import Portfolio from "./componets/Portfolio"
import "bootstrap/dist/css/bootstrap.min.css";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../src/App.css"


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Home />
      <About />
      <Portfolio />
      <Contact />

    </div>
  );
}

export default App;
