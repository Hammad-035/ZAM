import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SelectMenu.css';

const SelectMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.pathname);

  const handleSelectClick = () => {
    console.log('select button clicked');
    setOpenMenu(!openMenu);
  };

  const handleLinkClick = (path, event) => {

    console.log('link clicked');
    setIsActive(path);
    setOpenMenu(false);
  };

  return (
    <div className="select-menu">
      <div className="select-btn" onClick={handleSelectClick}>
        <span className="sBtn-text"> {isActive === '/home' ? 'Home' : isActive.replace(/^\//, '')}</span>
        <i className="fa fa-chevron-down icon-right" />
      </div>
      {openMenu && (
        <ul className="options">
          <li className="option-text">
            <Link className={isActive === '/home' ? 'option-text active' : 'option-text'} to="/home" data-value="home" onClick={(e) => handleLinkClick('/home', e)}>Home</Link>
          </li>
          <li className="option-text">
            <Link className={isActive === '/audioBook' ? 'option-text active' : 'option-text'} to="/audioBook" data-value="audioBook" onClick={(e) => handleLinkClick('/audioBook', e)}>Audio Book</Link>
          </li>
          <li className="option-text">
            <Link className={isActive === '/bayanaat' ? 'option-text active' : 'option-text'} to="/bayanaat" data-value="bayanaat" onClick={(e) => handleLinkClick('/bayanaat', e)}>Bayanat</Link>
          </li>
          <li className="option-text">
            <Link className={isActive === '/naat' ? 'option-text active' : 'option-text'} to="/naat" data-value="naatain" onClick={(e) => handleLinkClick('/naat', e)}>Naat</Link>
          </li>
          <li className="option-text">
            <Link className={isActive === '/contact-us' ? 'option-text active' : 'option-text'} to="/contact-us" data-value="contact" onClick={(e) => handleLinkClick('/contact-us', e)}>Contact us</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SelectMenu;
