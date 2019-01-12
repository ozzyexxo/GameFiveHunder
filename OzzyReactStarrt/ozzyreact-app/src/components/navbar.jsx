import React, { Component } from "react";
import NavRouterLink from "./nav_routerlink";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavRouterLink link_to="/" title="Home" />
            <NavRouterLink link_to="/apidata" title="RedditScroller" />
            <NavRouterLink link_to="/form" title="Form" />
            <NavRouterLink link_to="/counters" title="Counters" />
            <NavRouterLink link_to="/products" title="Products" />
            <NavRouterLink link_to="/items" title="Items" />
            <NavRouterLink link_to="/videos" title="Videos" />
            <NavRouterLink link_to="/redux1" title="Redux_API" />
            <NavRouterLink link_to="/redux2" title="Redux_Form" />
            <NavRouterLink link_to="/reduxchat" title="ChatKit_Redux" />
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default NavBar;
