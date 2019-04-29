import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const IntroText = styled.div`
  font-size: 28px;
  line-height: 1.3em;
  text-align: center;
  text-shadow: 2px 2px 8px ${colors.$apple_grey_medium};
`;

const HighLightText = styled.span`
  color: ${colors.$apple_blue};
`;

export default function FrontPageIntro() {
  return (
    <IntroText>
      An{" "}
      <HighLightText>
        <em>aspiring full stack web developer</em>
      </HighLightText>{" "}
      with a marketing and customer service background aiming to create
      immersive and meaningful web experiences for everyone.
    </IntroText>
  );
}
