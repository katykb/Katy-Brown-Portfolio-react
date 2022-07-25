import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import "../../src/Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="footer-row">
         <a href="https://github.com/katykb" ><FaGithub className="gitHub-icon" /></a>
         <a href="https://www.linkedin.com/in/katy-brown-a7984084/" > <FaLinkedin className="linkedIn-icon" /></a>
          <a href="mailto:katybr35@gmail.com"><FaEnvelopeSquare className="email-icon" /></a>
        </div>
      </div>
    </div>
  );
};

function FooterNav() {
  const [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Home />;
  };

  return (
    <div>
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
export default Footer;
