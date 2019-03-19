import React from "react";
import { Link, graphql } from "gatsby";
import { IconContext } from "react-icons";
import { FaArrowLeft } from "react-icons/fa";
import Img from "gatsby-image";
import moment from "moment";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import Randomizer from "../utils/Randomizer";

function randomColors() {
  const colorArr = [
    "#ce94b8",
    "#af0749",
    "#5e6ec4",
    "#1299e5",
    "#b61bac",
    "#292310"
  ];
  return colorArr[Randomizer(colorArr.length)];
}

const BlogTitle = styled.h1`
  color: ${randomColors()};
  margin-bottom: 0.5rem;
`;
const BlogDetails = styled.small`
  color: gray;
`;
const BlogBody = styled.div`
  margin-top: 1rem;
`;
const StyledLink = styled(Link)`
  font-size: 14px;
`;

export default function Template({ data }) {
  const post = data.contentfulPost;
  const formattedDate = moment(data.createAt).format("MMMM Do YYYY, h:mm a");
  return (
    <Layout>
      <SEO
        title={post.postTitle}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <div>
        <BlogTitle>{post.postTitle}</BlogTitle>
        <BlogDetails>
          Posted by {post.author} on {formattedDate}
        </BlogDetails>
        <div>
          <StyledLink to="/blog">Go Back</StyledLink>
        </div>
        <Img fluid={post.image.fluid} />
        <BlogBody
          dangerouslySetInnerHTML={{
            __html: post.postContent.childContentfulRichText.html
          }}
        />
        <IconContext.Provider value={{ color: "#00a0dc", size: "1.5em" }}>
          <div>
            <FaArrowLeft />
            <StyledLink to="/blog">Go Back</StyledLink>
          </div>
        </IconContext.Provider>
      </div>
    </Layout>
  );
}

// Query

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    # markdownRemark(frontmatter: { path: { eq: $path } }) {
    #   html
    #   frontmatter {
    #     path
    #     title
    #     author
    #     date
    #   }
    # }
    contentfulPost(slug: { eq: $slug }) {
      postTitle
      postSubtitle
      author
      createdAt
      postContent {
        childContentfulRichText {
          html
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
