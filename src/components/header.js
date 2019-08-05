import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

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

const LinkWithBorder = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: rgb(63, 63, 63);
  margin: 5px;
  line-height: 1.5em;
  padding: 5px;
  background-color: transparent;
  transition: all 0.2s;
  &::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 0;
    height: 2px;
    background-color: ${props => props.borderColor || "salmon"};
    transition: width 0.2s;
    padding: 1px 10px;
    border-radius: 0 5px 5px 0;
  }
  &:hover::after {
    transition: all 0.5s;
    width: 100%;
    border-radius: 0;
  }
`;

const Header = ({ siteTitle }) => (
  <header>
    <NavBar>
      <LinkWithBorder to="/" borderColor={colors.orange}>
        Home
      </LinkWithBorder>
      <LinkWithBorder to="/blog" borderColor={colors.green}>
        Blog
      </LinkWithBorder>
      <LinkWithBorder to="/portfolio" borderColor={colors.blue}>
        Portfolio
      </LinkWithBorder>
      <LinkWithBorder to="/about" borderColor={colors.red}>
        About
      </LinkWithBorder>
      <LinkWithBorder to="/contact" borderColor={colors.darkgreen}>
        Contact
      </LinkWithBorder>
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
