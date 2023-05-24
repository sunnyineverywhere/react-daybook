import React, { useState } from "react";
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  gap: 32px;
`;

const Title = styled.h2`
  font-size: 1rem;
  text-align: center;
  color: #000000;
`;

const Input = ({ text, setText, inputSize, title }) => {
  const onChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <Wrap>
      <Title>{title}</Title>
      <StyledInput type="text" onChange={onChange} />
    </Wrap>
  );
};

export default Input;
