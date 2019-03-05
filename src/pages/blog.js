import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import styled from "styled-components";

const BlogHeader = styled.h1`
  text-align: center;
`;

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`, `blog`]} />
    <BlogHeader>My love/hate relationship with frontend development</BlogHeader>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <Card
          headerText={post.node.frontmatter.title}
          bodyText={post.node.frontmatter.author}
          blogLink={post.node.frontmatter.path}
        />
      </div>
    ))}
  </Layout>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`;

export default Blog;
