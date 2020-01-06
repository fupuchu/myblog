import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import FrontPageIntro from "../components/frontPageIntro";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <FrontPageIntro />
  </Layout>
);

export default IndexPage;
