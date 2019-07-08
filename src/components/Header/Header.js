import React from 'react';
import logo from '../../logo.svg';

const Header = ({ bodyText, linkText, buttonText }) => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <p>{bodyText}</p>
      <a
        className="link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkText}
      </a>
      <button type="button">{buttonText}</button>
    </header>
  );
};

export default Header;
