import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Greeter from "../components/greeter";
import FrontPageIntro from "../components/frontPageIntro";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <Greeter />
    <FrontPageIntro />
  </Layout>
);

export default IndexPage;
