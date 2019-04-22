import React from "react";
import styled from "styled-components";
import Colors from "../styles/colors";
import Img from "gatsby-image";

const CardWrapper = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid ${Colors.$apple_grey_lighter};
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
`;

const CardInfo = styled.div`
  margin: 0 10px 0 10px;
`;

const CardHeader = styled.h2`
  color: ${Colors.$apple_red};
`;

const CardBody = styled.p`
  color: ${Colors.$apple_grey_dark};
`;

const CardImg = styled(Img)`
  background-color: transparent;
  max-width: 100%;
  @media screen and (max-width: 850px) {
    max-width: 100%;
  }
`;

const CardStack = styled.ul`
  color: ${Colors.$apple_grey_dark};
  margin: 0;
  li {
    display: inline;
  }
`;

const TechStack = styled.small`
  color: ${Colors.$apple_grey_light};
`;

const CardPortfolio = props => {
  console.log(props.techStack);
  return (
    <CardWrapper>
      <CardImg fluid={props.imgSrc} />
      <CardInfo>
        <CardHeader>{props.headerText}</CardHeader>
        <TechStack>Tech Stack</TechStack>
        <CardStack>
          {props.techStack.map(n => (
            <li>{n}</li>
          ))}
        </CardStack>
        <CardBody dangerouslySetInnerHTML={{ __html: props.bodyText }} />
      </CardInfo>
    </CardWrapper>
  );
};

export default CardPortfolio;
