import React, { useState } from "react";
import Header from "../components/header";
import styled from "styled-components";
import AuthorInput from "../components/authorInput";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  align-contents: center;
`;

const DiaryEditor = () => {
  const [author, setAuthor] = useState("");
  return (
    <Wrapper>
      <Header children={"My Daily Moods"} />
      <AuthorInput />
    </Wrapper>
  );
};

export default DiaryEditor;
