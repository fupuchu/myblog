import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
// import Greeter from "../components/greeter";
// import Image from "../components/image";

const Box = styled.div`
  width: 100%;
  height: 600px;
  background-color: gainsboro;
  display: grid;
  grid-template-columns: 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2%;
  grid-template-rows: 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2% 2%;
  grid-gap: 0;
  /* transform: rotate(45deg); */
  margin-top: 8em;
  margin-bottom: 8em;
  @media screen and (max-width: 865px) {
    transform: rotate(0);
    margin-top: 0;
    margin-bottom: 0;
  }
`;
const BoxContent = styled.div`
  grid-column-start: 20;
  grid-column-end: 30;
  grid-row-start: 1;
  background-color: lime;
`;

const BoxContent2 = styled.div`
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: salmon;
`;

const BoxContent3 = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  background-color: salmon;
`;

const BoxContent4 = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  background-color: slateblue;
`;

const BoxMenu = () => (
  <Layout>
    <SEO
      title="Box Menu Testing"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <Box>
      <BoxContent />
      <BoxContent2 />
      <BoxContent3 />
      <BoxContent4 />
    </Box>
  </Layout>
);

export default BoxMenu;
