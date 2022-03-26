import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <>
      <button className="btn btn-sm btn-outline-secondary" type="button">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About me
        </a>
      </button>
      <button className="btn btn-sm btn-outline-secondary" type="button">
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
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
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </button>
      <button className="btn btn-sm btn-outline-secondary" type="button">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </button>
    </>
  );
}

export default Navigation;
