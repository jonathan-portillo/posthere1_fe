import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/";
import Logo from "./Logo";

const Nav = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <nav>
        <NavLink to="/" className="post-here" onClick={() => setOpen(false)}>
          <Logo className="logo" />
          <span>Post Match</span>
        </NavLink>
        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          className={`nav-links${open ? " open" : ""}`}
          onClick={() => setOpen(false)}
        >
          {!props.loggedIn && (
            <NavLink to="/" end>
              Home
            </NavLink>
          )}
          {props.loggedIn && <NavLink to="/dashboard">Predict</NavLink>}
          <NavLink to="/about">About</NavLink>
          {!props.loggedIn && <NavLink to="/login">Login</NavLink>}
          {!props.loggedIn && (
            <NavLink to="/signup" className="nav-cta">
              Sign Up
            </NavLink>
          )}
          {props.loggedIn && (
            <NavLink
              to="/"
              end
              className="nav-logout"
              onClick={() => props.logout()}
            >
              Logout
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps, { logout })(Nav);
