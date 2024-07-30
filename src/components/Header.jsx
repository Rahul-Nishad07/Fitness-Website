import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here, such as navigating to a search results page
    console.log('Performing search with query:', searchQuery);
    // Clear the search input
    setSearchQuery('');
  };

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
              <ul className="">
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
                <li className="dropdown">
                <form className='searchbarheader' onSubmit={handleSearchSubmit}>
                <input id='idforsearchbar'
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  
                />
                {/* <button type="submit"><i className="fa fa-search" /></button> */}
              </form>
              </li>
              </ul>
            </div>
           
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
