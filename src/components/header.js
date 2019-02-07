import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className="sticky">
    <Link to="/" className="logo">
      {siteTitle}
    </Link>
    <Link to="/page-2" className="button">
      Blog
    </Link>
    <Link to="/portfolio" className="button">
      Portfolio
    </Link>
    <Link to="/page-2" className="button">
      Contact
    </Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
