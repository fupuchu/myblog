import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./header";
// import colors from "../styles/colors";

//Icons
import { IconContext } from "react-icons";
import {
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitch
} from "react-icons/fa";

// Styled Components

const Container = styled.div``;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Copyright = styled.p`
  text-align: center;
  font-size: 14px;
`;

const FixedFooter = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
`;

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
        <div>
          <main>
            <Container>{children}</Container>
          </main>
          <FixedFooter>
            {` `}
            <SocialIcons>
              <IconContext.Provider value={{ color: "#1DA1F2", size: "2em" }}>
                <div>
                  <a href="https://www.twitter.com/fupuchu " target="_blank ">
                    <FaTwitterSquare />
                  </a>
                </div>
              </IconContext.Provider>

              <IconContext.Provider value={{ color: "#333", size: "2em" }}>
                <div>
                  <a href="https://github.com/fupuchu " target="_blank ">
                    <FaGithubSquare />
                  </a>
                </div>
              </IconContext.Provider>

              <IconContext.Provider value={{ color: "#00a0dc", size: "2em" }}>
                <div>
                  <a
                    href="https://www.linkedin.com/in/iamleonho/ "
                    target="_blank "
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </IconContext.Provider>

              <IconContext.Provider value={{ color: "#6441a5", size: "2em" }}>
                <div>
                  <a href="https://twitch.tv/fupuchu" target="_blank ">
                    <FaTwitch />
                  </a>
                </div>
              </IconContext.Provider>
            </SocialIcons>
            <Copyright>© {new Date().getFullYear()} fupuchu</Copyright>
          </FixedFooter>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
