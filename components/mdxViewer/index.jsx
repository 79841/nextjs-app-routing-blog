"use client";
import React, { Suspense } from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./CodeBlock";
import "github-markdown-css";
import { styled } from "styled-components";
import Image from "next/image";
import DynamicImage from "./DynamicImage";
import IndexTable from "./PostIndexTable";
import "./styles.css";
import PostIndex from "./PostIndexTable/PostIndex";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

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

const MdxViewer = ({ postPath }) => {
  const Post = dynamic(
    () =>
      import(`@/posts/blog/${postPath.join("/")}`).catch((err) => {
        return notFound();
      }),
    {
      loading: () => <p>Loading...</p>,
      ssr: false,
    }
  );

  const components = {
    h1: ({ children }) => (
      <h1>
        <PostIndex level={1}>{children}</PostIndex>
      </h1>
    ),
    h2: ({ children }) => (
      <h1>
        <PostIndex level={2}>{children}</PostIndex>
      </h1>
    ),
    h3: ({ children }) => (
      <h1>
        <PostIndex level={3}>{children}</PostIndex>
      </h1>
    ),

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
            <Suspense>
              <Post />
            </Suspense>
          </MarkDownContainer>
        </MDXProvider>
      </ContentContainer>
      {/* <IndexTableContainer>
        <IndexTable />
      </IndexTableContainer> */}
    </Container>
  );
};

export default MdxViewer;
