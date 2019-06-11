import React from "react";
import styled from "styled-components";

const DefaultContainer = styled.div`
  margin: 1rem auto;
  max-width: 600px;
  @media screen and (max-width: 850px) {
    margin-top: 0.5rem;
    padding: 0 10px 0 10px;
  }
`;

const Container = ({ children }) => {
  return <DefaultContainer>{children}</DefaultContainer>;
};

export default Container;
