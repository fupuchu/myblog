import React from "react";
import styled from "styled-components";
import Colors from "../styles/colors";
import { Link } from "gatsby";

const CardWrapper = styled.div`
  border: 2px solid gray;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const CardHeader = styled.h2`
  color: ${Colors.orange};
`;

const CardBody = styled.p`
  color: ${Colors.blue};
`;

const Card = props => {
  return (
    <CardWrapper>
      <CardHeader>{props.headerText}</CardHeader>
      <CardBody>{props.bodyText}</CardBody>
      <Link to={props.blogLink}>Read More</Link>
    </CardWrapper>
  );
};

export default Card;
