import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "../../node_modules/mini.css/src/flavors/mini-default.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()} Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            <a href="https://www.twitter.com/fupuchu " target="_blank ">
              <i class="fab fa-2x fa-twitter " />
            </a>
            <a href="https://github.com/fupuchu " target="_blank ">
              <i class="fab fa-2x fa-github " />
            </a>
            <a href="https://www.linkedin.com/in/iamleonho/ " target="_blank ">
              <i class="fab fa-2x fa-linkedin " />
            </a>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
