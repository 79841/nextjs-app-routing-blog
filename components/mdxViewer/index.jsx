import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./CodeBlock";
import "github-markdown-css";
import { styled } from "styled-components";
import Image from "next/image";
import DynamicImage from "./DynamicImage";

const MarkDownContainer = styled.div`
  width: 100%;
  border: 2px solid #cfcfcf;
  box-sizing: border-box;
  padding: 2rem;
  padding-top: 3em;
  border-radius: 0.5rem;
  background-color: #fff;
  min-height: 40rem;
  /* box-shadow: 10px 10px 5px 0px rgba(189, 189, 189, 0.75); */
`;

const components = {

  pre: ({ children }) => <>{children}</>,
  code:CodeBlock,

  p: ({ children }) => <p style={{ width: "100%" }}>{children}</p>,
  img:DynamicImage,
};

const MdxViewer = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <MarkDownContainer className="markdown-body">
        {children}
      </MarkDownContainer>
    </MDXProvider>
  );
};

export default MdxViewer;
