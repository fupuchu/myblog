import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./header";

//Icons
import { IconContext } from "react-icons";
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

// Styled Components

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Copyright = styled.p`
  text-align: center;
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
          <footer>
            {` `}
            <SocialIcons>
              <IconContext.Provider value={{ color: "#1DA1F2", size: "3em" }}>
                <div>
                  <a href="https://www.twitter.com/fupuchu " target="_blank ">
                    <FaTwitterSquare />
                  </a>
                </div>
              </IconContext.Provider>

              <IconContext.Provider value={{ color: "#333", size: "3em" }}>
                <div>
                  <a href="https://github.com/fupuchu " target="_blank ">
                    <FaGithubSquare />
                  </a>
                </div>
              </IconContext.Provider>

              <IconContext.Provider value={{ color: "#00a0dc", size: "3em" }}>
                <div>
                  <a
                    href="https://www.linkedin.com/in/iamleonho/ "
                    target="_blank "
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </IconContext.Provider>
            </SocialIcons>
            <Copyright>© {new Date().getFullYear()} fupuchu</Copyright>
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
