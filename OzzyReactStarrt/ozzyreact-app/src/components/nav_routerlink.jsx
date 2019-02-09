import React from "react";
import { Link } from "react-router-dom";

const NavRouterLink = props => {
  return (
    <li className="nav-item active">
      <Link className="nav-link" to={props.link_to}>
        {props.title} <span className="sr-only">(current)</span>
      </Link>
    </li>
  );
};

export default NavRouterLink;
