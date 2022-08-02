import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";
import "../../src/Footer.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row-footer">
          <div class="col footer-text">
            &copy;{new Date().getFullYear()} | Katy Brown
          </div>
          <div className="footer-icons">
            <a href="https://github.com/katykb">
              <FaGithub className="gitHub-icon" />
            </a>
            <a href="https://www.linkedin.com/in/katy-brown-a7984084/">
              <FaLinkedin className="linkedIn-icon" />
            </a>
            <a href="mailto:katybr35@gmail.com">
              <FaEnvelopeSquare className="email-icon" />
            </a>
          </div>
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
