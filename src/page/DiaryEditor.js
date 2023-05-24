import React, { useState } from "react";
import Header from "../components/header";
import styled from "styled-components";
import Input from "../components/Input";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  align-contents: center;
`;

const DiaryEditor = () => {
  const [author, setAuthor] = useState("");
  const [mood, setMood] = useState("");

  return (
    <Wrapper>
      <Header children={"My Daily Moods"} />
      <Input text={author} setText={setAuthor} title="Author" />
      <Input text={mood} setText={setMood} title="Today's mood" />
    </Wrapper>
  );
};

export default DiaryEditor;
