import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <a className="navbar-brand" href="#" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          FirstReact-Site
        </a>
        <button
          type="button"
          onClick={props.toggleTheme}
          className={`btn ${props.mode === "light" ? "btn-light" : "btn-dark"}`}
          >
          {props.mode === "light" ? "Dark" : "Light"}
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                Features
              </a>
            </li>
          </ul>
        
          </div>
      </nav>
    </>
  );
}
