import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => (
  <Layout>
    <SEO
      title="About Me"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <h1>About me</h1>
  </Layout>
);

export default About;
