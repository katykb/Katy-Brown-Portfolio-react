import React from "react";
import Navigation from "./Navigation";
import "../../src/App.css";
import Home from "./Home";
import About from "./About ";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import { useState } from "react";

function Header() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => setCurrentPage(page);

  
  const renderPage = () => {
    if (currentPage === "Home") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    // if (currentPage === "About") {
    //   return <About />;
    // }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <About />;
  };

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}
export default Header;
