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
  color: #000;
`;

const CardBody = styled.p`
  color: #000;
  float: right;
`;

const CardDate = styled.p`
  color: ${Colors.red};
  margin-bottom: 0;
`;

const Card = props => {
  return (
    <CardWrapper>
      <CardHeader>{props.headerText}</CardHeader>
      <CardBody>{props.bodyText}</CardBody>
      <Link to={props.blogLink}>Read More</Link>
      <CardDate>{props.postDate}</CardDate>
    </CardWrapper>
  );
};

export default Card;
