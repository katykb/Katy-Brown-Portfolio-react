import Navigation from "./componets/Navigation";
//import Footer from "./componets/Footer";
// import Contact from "./componets/Contact";
// import About from "./componets/About "
// import Projects from "./componets/Project"
// import Home from "./componets/Home"
import "bootstrap/dist/css/bootstrap.min.css";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../src/index.css"


function App() {
  return (
    <div className="App">
      <Navigation />
{/* <Router>
  <Routes>
  {/* <Route path = "/Home" element = { <Home />} /> */}
  {/* <Route path = "/Projects" element = { <Projects />} />
  <Route path = "/About" element = { <About />} />
  <Route path = "/Contact" element = { <Contact />} />
  </Routes>
</Router> */} 
      {/* <Footer /> */}
    </div>
  );
}

export default App;
