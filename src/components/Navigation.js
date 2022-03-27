import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
  return (
    <>
      <button className="btn btn-sm btn-outline-secondary" type="button">
        <a
          href="#about"
          onClick={() => setCurrentPage("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About me
        </a>
      </button>
      <button className="btn btn-sm btn-outline-secondary" type="button">
        <a
          href="#portfolio"
          onClick={() => setCurrentPage("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </button>
      <button className="btn btn-sm btn-outline-secondary" type="button">
        <a
          href="#resume"
          onClick={() => setCurrentPage("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </button>
      <button className="btn btn-sm btn-outline-secondary" type="button">
        <a
          href="#contact"
          onClick={() => setCurrentPage("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </button>
    </>
  );
}

export default Navigation;
