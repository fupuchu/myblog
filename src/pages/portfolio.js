import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";

const Portfolio = () => (
  <Layout>
    <SEO
      title="Portfolio"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <h1>My love/hate relationship with frontend development</h1>
    <Card headerText="This is the header text" bodyText="Lorem 😂😂 ipsum 🕵️‍♂️dolor sit✍️ amet, consectetur adipiscing😇😇🤙 elit, sed do eiusmod🥰 tempor 😤😤🏳️‍🌈incididunt ut 👏labore 👏et👏 dolore 👏magna👏 aliqua. Ut enim ad minim 🐵✊🏿veniam,❤️😤😫😩💦💦 quis nostrud 👿🤮exercitation ullamco 🧠👮🏿‍♀️🅱️laboris nisi ut aliquip❗️ ex ea commodo consequat. 💯Duis aute💦😂😂😂 irure dolor 👳🏻‍♂️🗿in reprehenderit 🤖👻👎in voluptate velit esse cillum dolore 🙏🙏eu fugiat🤔 nulla pariatur. 🙅‍♀️🙅‍♀️Excepteur sint occaecat🤷‍♀️🤦‍♀️ cupidatat💅 non💃 proident,👨‍👧 sunt🤗 in culpa😥😰😨 qui officia🤩🤩 deserunt mollit 🧐anim id est laborum.🤔🤔" />
  </Layout>
);

export default Portfolio;
