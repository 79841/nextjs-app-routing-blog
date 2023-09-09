import React from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./CodeBlock";
import "github-markdown-css";
import { styled } from "styled-components";
import Image from "next/image";
import DynamicImage from "./DynamicImage";
import IndexTable from "./indexTable";
import "./styles.css";
import PostIndex from "./indexTable/PostIndex";

const MarkDownContainer = styled.div`
  width: 100%;
  border: 2px solid #cfcfcf;
  box-sizing: border-box;
  padding: 2rem;
  padding-top: 3em;
  border-radius: 0.5rem;
  background-color: #fff;
  min-height: 40rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ContentContainer = styled.div`
  flex: 1;
  height: 100%;
  margin: 2rem;
  max-width: 60rem;
  min-width: 40rem;
`;

const IndexTableContainer = styled.div`
  min-width: 35rem;
  height: 100%;
  margin: 3rem;
`;

const MdxViewer = ({ children }) => {
  const components = {
    h1: PostIndex,

    pre: ({ children }) => <>{children}</>,
    code: CodeBlock,

    p: ({ children }) => <div style={{ width: "100%" }}>{children}</div>,
    img: DynamicImage,
  };

  return (
    <Container>
      <ContentContainer>
        <MDXProvider components={components}>
          <MarkDownContainer className="markdown-body">
            {children}
          </MarkDownContainer>
        </MDXProvider>
      </ContentContainer>
      <IndexTableContainer>
        <IndexTable />
      </IndexTableContainer>
    </Container>
  );
};

export default MdxViewer;
