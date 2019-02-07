import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Portfolio = () => (
  <Layout>
    <SEO
      title="Portfolio"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <h1>My love/hate relationship with frontend development</h1>
  </Layout>
);

export default Portfolio;
