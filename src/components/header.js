import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #bf4f74;
`;

const Header = ({ children }) => {
  return <Title>{children}</Title>;
};

export default Header;
