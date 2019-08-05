import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 0;
  @media screen and (max-width: 600px) {
    padding: 30px 10px;
  }
`;

const InnerWrapper = ({ children }) => {
  return <WrapperDiv>{children}</WrapperDiv>;
};

export default InnerWrapper;
