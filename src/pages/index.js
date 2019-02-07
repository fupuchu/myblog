import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Randomizer from "../utils/Randomizer";
import moment from "moment";

function LangGreeter() {
  let greetArr = ["Hello", "Ni Hao", "Guten", "Konnichiwa"];
  const hour = moment().format("H");
  const res = greetArr[Randomizer(greetArr.length)];

  if (hour >= 0 && hour <= 11) {
    return <span>{res}, I am Leon Ho Morning</span>;
  } else if (hour >= 12 && hour < 17) {
    return <span>{res}, I am Leon Ho Afternoon</span>;
  } else {
    return <span>{res}, I am Leon Ho Evening</span>;
  }
}

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <h1>
      <LangGreeter />
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nam quo
      debitis consectetur alias. Esse, adipisci nihil, obcaecati earum
      voluptatum dicta quo tenetur atque ducimus sed error totam voluptatibus
      sequi?
    </p>
  </Layout>
);

export default IndexPage;
