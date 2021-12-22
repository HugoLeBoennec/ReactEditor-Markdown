import React, { useContext, useRef } from "react";
import ReactDOM from "react-dom"
import editorContext from "../editorContext";

import styled from "styled-components";
import { MarkedInput } from "./markedInput";

const Bold = { icon: "B", startStyle: "**", endStyle: "**" };
const Italic = { icon: "I", startStyle: "*", endStyle: "*" };
const BoldItalic = { icon: "I", startStyle: "***", endStyle: "***" };
const H1 = { icon: "H1", startStyle: "#", endStyle: "" };
const H2 = { icon: "H2", startStyle: "##", endStyle: "" };
const H3 = { icon: "H3", startStyle: "###", endStyle: "" };
const Quote = { icon: "Quote", startStyle: ">", endStyle: "" };
const Code = { icon: "Code", startStyle: "`", endStyle: "`" };
const BlockCode = { icon: "BlockCode", startStyle: "```", endStyle: "```" };
const Rule = { icon: "R", startStyle: "---", endStyle: "---" };
const Image = { icon: "Image", startStyle: "![image](", endStyle: ")"};
const Link = { icon: "Link", startStyle:"[name](", endStyle:")"};


/* Put on this array the function available fopr */
const config = [Bold, Italic, H1, H2, H3, Quote, Code, BlockCode, Rule, Image, Link];

const Button = styled.div`border: 1px black solid;
border-radius: 2px;
min-width: 25px;
height:25px;
font-weight: 600;
text-align: center;
item-align: center;
box-shadow: black 1px 1px;
padding: 2px;
cursor: pointer;
`;

export function Formatter(info) {

    const { markdownText, setMarkdownText } = useContext(editorContext);
    const Mdx = () => { }

    const removeMdx = () => {

    }

    const addMdx = (ss, se) => {
        console.log(markdownText);
        let Output = "";
        // if(se != ""){
        let newText = markdownText.substring(info.info.current.selectionStart, info.info.current.selectionEnd);
        if (se !== "") newText = ss + newText + se;
        else newText = ss + " " + newText;
        Output = markdownText.slice(0, info.info.current.selectionStart) + newText + markdownText.slice(info.info.current.selectionEnd);

        info.info.current.value = Output;
        setMarkdownText(info.info.current.value)
    }

    return (
        <>
            {
                config.map((frt) =>
                    <Button key={frt.icon} onClick={() => addMdx(frt.startStyle, frt.endStyle)}>{frt.icon}</Button>
                )
            }
        </>
    );
}