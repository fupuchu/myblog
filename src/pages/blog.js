import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`, `blog`]} />
    <h1>My love/hate relationship with frontend development</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <Card
          headerText={post.node.frontmatter.title}
          bodyText={post.node.frontmatter.author}
        />
        <Link to={post.node.frontmatter.path}>Read More</Link>
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
