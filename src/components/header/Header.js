import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import { IoLocationSharp } from "react-icons/io5";

const Header = () => {
  const [isActive, setisActive] = useState("false");
  const toggleMenu = () => {
    setisActive(!isActive);
    document.body.classList.toggle("no-scroll");
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="index.html">
            <img src={logo} alt="Starbucks" />
          </a>
        </div>
        <ul className="navbar-nav-left text-md" style={{ marginBottom: "4px" }}>
          <li>
            <a href="/#">Menu</a>
          </li>
          <li>
            <a href="/#">Rewards</a>
          </li>
          <li>
            <a href="/#">Gift Cards</a>
          </li>
        </ul>
        <ul className="navbar-nav-right">
          <li>
            <a href="/#">
              <IoLocationSharp />
              <span>Find a store</span>
            </a>
          </li>
          <li>
            <button
              className="btn"
              style={{
                background: `#fff`,
                border: `1px solid #000`,
                color: `#000`,
              }}
            >
              Signin
            </button>
          </li>
          <li>
            <button
              className="btn"
              style={{
                background: `#fff`,
                border: `1px solid #000`,
                color: `#000`,
              }}
            >
              Join Now
            </button>
          </li>
        </ul>
        <button
          type="button"
          className={`hamburger ${isActive ? "" : "open"}`}
          id="menu-btn"
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className={`mobile-menu ${isActive ? "hidden" : "null"}`} id="menu">
        <ul>
          <li>
            <a href="/#">Menu</a>
          </li>
          <li>
            <a href="/#">Rewards</a>
          </li>
          <li>
            <a href="/#">Gift Cards</a>
          </li>
        </ul>

        <div className="mobile-menu-bottom">
          <button
            className="btn"
            style={{
              background: `#fff`,
              border: `1px solid #000`,
              color: `#000`,
            }}
          >
            Signin
          </button>
          <button
            className="btn"
            style={{
              background: `#fff`,
              border: `1px solid #000`,
              color: `#000`,
            }}
          >
            Join Now
          </button>
          <div>
            <a href="/#">
              <IoLocationSharp style={{ fontSize: "21px" }} />
              <span>Find a store</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
