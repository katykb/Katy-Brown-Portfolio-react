import React  from "react";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">
      <Header />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
