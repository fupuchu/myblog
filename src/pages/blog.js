import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import InnerWrapper from "../components/innerwrapper";
import styled from "styled-components";

const BlogHeader = styled.h1`
  text-align: center;
  padding: 30px 0 0 0;
  @media screen and (max-width: 600px) {
    padding: 30px 5px;
  }
`;

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`, `blog`]} />
    <BlogHeader>My love/hate relationship with frontend development</BlogHeader>
    <InnerWrapper>
      {data.allContentfulPost.edges.map(post => (
        <div key={post.node.id}>
          <Card
            headerText={post.node.postTitle}
            bodyText={post.node.author}
            blogLink={post.node.slug}
          />
        </div>
      ))}
    </InnerWrapper>
  </Layout>
);

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulPost {
      edges {
        node {
          slug
          author
          postTitle
        }
      }
    }
  }
`;

export default Blog;
