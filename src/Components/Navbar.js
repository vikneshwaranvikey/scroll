import React from "react";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>ROUTER-SCROLL</h1>
        </div>
        <nav className="navigator">
          <ul>
            <li>
              <HashLink smooth to="/#home">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#about">
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#contact">
                Contact Us
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#course">
                Developes
              </HashLink>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button type="button">Login</button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
