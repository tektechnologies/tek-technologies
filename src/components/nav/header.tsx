import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div className="logo">TEK Technologies</div>
        <ul className="nav-links">
          <li>
            <a href="#solutions">Solutions</a>
          </li>
          <li>
            <a href="#technology">Technology</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
