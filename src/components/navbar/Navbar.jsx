import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import logo from '../../Assets/tracom_services_cover.jpg'

function Navbar() {
  return (
    <div>
      <header>
        <nav className="main-nav">
          <img
            src={logo}
            alt="tracom-logo"
            className="main-logo"
          />
          <ul id="main-nav-ul">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            {/* <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li> */}
            <li>
              <Link to = {'/contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
