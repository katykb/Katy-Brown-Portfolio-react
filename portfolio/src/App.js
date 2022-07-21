import Navigation from "./componets/Navigation";
import About from "./componets/About ";
import Home from "./componets/Home"
//import Footer from "./componets/Footer";
import Contact from "./componets/Contact";
// import About from "./componets/About "
import Projects from "./componets/Projects"
// import Home from "./componets/Home"
import "bootstrap/dist/css/bootstrap.min.css";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../src/App.css"


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
