import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Greeter from "../components/greeter";
import Image from "../components/image";
// import Carousel from "../components/carousel";
// import image from "../assets/splash.jpg";
// import image1 from "../assets/image1.jpeg";
// import image2 from "../assets/image2.jpeg";
// import image3 from "../assets/image3.jpeg";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <Greeter />

    <p>
      An <em>aspiring full stack web developer</em> with a marketing and
      customer service background aiming to create immersive and meaningful web
      experiences for everyone.
    </p>
    <Image />
    <h1>My adventures on Instagram</h1>
  </Layout>
);

export default IndexPage;
