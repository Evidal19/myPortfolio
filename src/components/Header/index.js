import React, {useState} from 'react';
import About from '../pages/About/index.js';
import Portfolio from '../pages/Portfolio/index.js';
import Contact from '../pages/Contact/index.js';
import Skills from '../pages/Skills/index.js';

function Header() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Skills />
  }
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <header>
        <h1>Elisa Vidal</h1>
        {/* process section change */}
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <section className="project">
        {/* display the project div */}
        {renderPage()}
      </section>
    </div>
  );
}

export default Header;