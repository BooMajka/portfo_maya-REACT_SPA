import React, { useState } from "react";
import Navigation from "./Navigation";
import About from "./About";
import Project from "./Project";
import Resume from "./Resume";
import Contact from "./Contact";

function Header() {
	
	const [currentPage, setCurrentPage] = useState("About");

	const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Project />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

	return (
		<>
		<div className="header">
			<h1>Maya's Portfolio</h1>
			<nav className="navbar navbar-light">
				<form className="container-fluid justify-content-start">
				<Navigation 
				currentPage={currentPage}
				setCurrentPage={handlePageChange}
				
				/>
				</form>
			</nav>
			{renderPage()}
		</div>
		</>
	);
}

export default Header;
