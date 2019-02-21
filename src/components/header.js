import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: rgba(199, 199, 199, 0.3);
`;

const Header = ({ siteTitle }) => (
  <header>
    <NavBar>
      <Link to="/" className="nav-bar-links">
        {siteTitle}
      </Link>
      <Link to="/page-2" className="nav-bar-links">
        Blog
      </Link>
      <Link to="/portfolio" className="nav-bar-links">
        Portfolio
      </Link>
      <Link to="/page-2" className="nav-bar-links">
        Contact
      </Link>
    </NavBar>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
