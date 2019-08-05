import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CardPortfolio from "../components/card-portfolio";
import InnerWrapper from "../components/innerwrapper";

const PortfolioWrapper = styled.div`
  display: block;
`;

const PortfolioHeader = styled.h1`
  text-align: center;
  padding: 30px 0 0 0;
  @media screen and (max-width: 600px) {
    padding: 30px 5px;
  }
`;

export default function Portfolio({ data }) {
  const portfolioData = data.allContentfulPortfolio.edges;
  return (
    <Layout>
      <SEO
        title="Portfolio"
        keywords={[`gatsby`, `application`, `react`, `portfolio`]}
      />
      <InnerWrapper>
        <PortfolioHeader>Portfolio</PortfolioHeader>
        <PortfolioWrapper>
          {portfolioData.map(n => (
            <div key={n.node.id}>
              <CardPortfolio
                headerText={n.node.projectTitle}
                imgSrc={n.node.projectImage.fluid}
                techStack={n.node.techStack}
                bodyText={n.node.portfolioWriteUp.childContentfulRichText.html}
              />
            </div>
          ))}
        </PortfolioWrapper>
      </InnerWrapper>
    </Layout>
  );
}

export const portfolioQuery = graphql`
  query portfolioItmes {
    allContentfulPortfolio {
      edges {
        node {
          techStack
          projectTitle
          portfolioWriteUp {
            id
            childContentfulRichText {
              html
            }
          }
          projectImage {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
