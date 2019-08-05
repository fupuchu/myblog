import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutHeader = styled.h1`
  text-align: center;
  padding: 30px 0 0 0;
  @media screen and (max-width: 600px) {
    padding: 30px 5px;
  }
`;

const About = () => (
  <Layout>
    <SEO
      title="About Me"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <AboutHeader>About me</AboutHeader>
  </Layout>
);

export default About;
