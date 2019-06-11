import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import Greeter from "./greeter";
import Container from "./container";

const IntroText = styled.div`
  font-size: 28px;
  line-height: 1.3em;
  text-align: center;
  text-shadow: 2px 2px 8px ${colors.$apple_grey_medium};
`;

const HighLightText = styled.span`
  color: ${colors.$apple_blue};
`;

const FrontPageWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  height: calc(100vh - 120px);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function FrontPageIntro() {
  return (
    <FrontPageWrapper>
      <Container>
        <IntroText>
          <Greeter />
          An{" "}
          <HighLightText>
            <em>aspiring full stack web developer</em>
          </HighLightText>{" "}
          with a marketing and customer service background aiming to create
          immersive and meaningful web experiences for everyone.
        </IntroText>
      </Container>
    </FrontPageWrapper>
  );
}
