import React, { useContext, createRef } from "react";
import styled from "styled-components";
import editorContext from "../editorContext";
import { Formatter } from "./formatter";



const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border-right: 1.5px solid rgba(15, 15, 15, 0.4);
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const ToolBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;;
    border: 1px black dotted;
    background-color: #FF993
`

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;

export function MarkedInput(props) {
  const { setMarkdownText } = useContext(editorContext);
  const textArea = createRef();

  const onInputChange = e => {
    const newValue = e.currentTarget.value;
    setMarkdownText(newValue);
  };

  return (
    <Container>
      <Title>Original Text - Markdown</Title>
      <ToolBar>
      <Formatter info={textArea}/>
      </ToolBar>
      <TextArea ref={textArea} onChange={onInputChange} />
    </Container>
  );
}
