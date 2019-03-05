import React from "react";
import styled from "styled-components";
import Colors from "../styles/colors";

const CardWrapper = styled.div`
  border: 1px solid blue;
`;

const CardHeader = styled.h2`
  border: 1px solid black;
  color: ${Colors.orange};
`;

const CardBody = styled.p`
  border: 1px solid orange;
  color: ${Colors.blue};
`;

const Card = props => {
  return (
    <CardWrapper>
      <CardHeader>{props.headerText}</CardHeader>
      <CardBody>{props.bodyText}</CardBody>
    </CardWrapper>
  );
};

export default Card;
