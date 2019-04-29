import React from "react";
import styled from "styled-components";
// import colors from "../styles/colors";

const HeaderText = styled.h1`
  text-align: center;
  padding: 10px;
  color: rgb(51, 51, 51);
`;

export default function PageTitle(props) {
  return (
    <div>
      <HeaderText>{props.headerContent}</HeaderText>
    </div>
  );
}
