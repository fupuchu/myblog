import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import CardPortfolio from "../components/card-portfolio";

const PortfolioWrapper = styled.div`
  display: block;
`;

export default function Portfolio({ data }) {
  const portfolioData = data.allContentfulPortfolio.edges;
  return (
    <Layout>
      <SEO
        title="Portfolio"
        keywords={[`gatsby`, `application`, `react`, `portfolio`]}
      />
      <h1>Portfolio</h1>
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
