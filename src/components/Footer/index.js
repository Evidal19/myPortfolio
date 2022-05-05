import React from 'react';
import git from '../../assets/git/git.png'
import linkin from '../../assets/linkin/linkin.png';

function Footer () {

  return (
      <footer>
          <a href="https://github.com/Evidal19" rel="noopener noreferrer" target="_blank">
              <img className="git" src={git} alt=""/>
          </a>
          <a href="https://www.linkedin.com/in/elisa-vidal-478067225/" rel="noopener noreferrer" target="_blank">
              <img className="linkin" src={linkin} alt=""/>
          </a>
      </footer>
  );
}

export default Footer;