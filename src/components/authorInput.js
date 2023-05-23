import React from "react";
import styled from "styled-components";

const StyledInput = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  color: #bf4f74;
  font-size: 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  text-align: center;
  float:left

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const Wrap = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1rem;
  text-align: center;
  color: #000000;
  float: left;
`;

const AuthorInput = () => {
  return (
    <Wrap>
      <Title>Author</Title>
      <StyledInput type="text" />
    </Wrap>
  );
};

export default AuthorInput;
