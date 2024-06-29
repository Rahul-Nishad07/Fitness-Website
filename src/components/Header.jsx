import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className="header stricky">
      <div className="container">
        <div className="logo pull-left">
          <Link to="/">
            <img src="img/resources/fitlogo.png" alt="Awesome Image" />
          </Link>
        </div>
        <div className="header-right pull-right">
          <nav className="mainmenu-holder">
            <div className="nav-header">
              <ul className="navigation">
                <li className="dropdown">
                  <Link to="/">Home</Link>
                  <ul className="submenu"></ul>
                </li>
                <li className="dropdown">
                  <Link to="/about">About Us</Link>
                  <ul className="submenu">
                    <li><Link to="/trainer">Our Trainer</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="/classes">Classes</Link>
                  <ul className="submenu">
                    <li><Link to="/schedule">Class Schedule</Link></li>
                    <li><Link to="/bodybuilding">Class Details</Link></li>
                  </ul>
                </li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="nav-footer">
              <ul>
                <li>
                  <button><i className="fa fa-search" /></button>
                  <ul className="search-box">
                    <li>
                      <form action="#">
                        <input type="text" placeholder="Search for something..." />
                        <button type="submit"><i className="fa fa-search" /></button>
                      </form>
                    </li>
                  </ul>
                </li>
                <li><button className="menu-expander"><i className="fa fa-list-ul" /></button></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
