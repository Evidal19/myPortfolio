import React from 'react';
function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
        <ul> 
            <li>
                {/* If About link is clicked, render About section */}
                <a 
                    href="#about-me"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li>
                {/* If Portfolio link is clicked, render Portfolio section */}
                <a 
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}>
                    Portfolio
                </a>
            </li>
            <li>
                {/* If Contact link is clicked, render Contact section */}
                <a 
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}>
                    Contact
                </a>
            </li>
        </ul>  
    </nav>
  );
}

export default Navigation;