"use client";
import React, { Suspense } from "react";
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "./CodeBlock";
import "github-markdown-css";
import { styled } from "styled-components";
import Image from "next/image";
import DynamicImage from "./image/DynamicImage";
import IndexTable from "./PostIndexTable";
import "./styles.css";
import PostIndex from "./PostIndexTable/PostIndex";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const MarkDownContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background-color: transparent;
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
  /* margin: 2rem; */
  max-width: 60rem;
  min-width: 40rem;
`;

const MdxViewer = ({ postPath, ImageBox }) => {
  console.log(postPath);
  const Post = dynamic(
    () =>
      import(`@/posts/${postPath}.mdx`).catch((err) => {
        return notFound();
      }),
    {
      loading: () => <p>Loading...</p>,
    }
  );

  const components = {
    h1: ({ children }) => (
      <h1 style={{ fontSize: "1.7rem" }}>
        <PostIndex level={1}>{children}</PostIndex>
      </h1>
    ),
    h2: ({ children }) => (
      <h2>
        <PostIndex level={2}>{children}</PostIndex>
      </h2>
    ),
    h3: ({ children }) => (
      <h3>
        <PostIndex level={3}>{children}</PostIndex>
      </h3>
    ),

    pre: ({ children }) => <>{children}</>,
    code: CodeBlock,

    p: ({ children }) => (
      <div style={{ width: "100%", backgroundColor: "transparent" }}>
        {children}
      </div>
    ),
    img: ImageBox ? ImageBox : DynamicImage,
  };

  return (
    <Container>
      <ContentContainer>
        <MDXProvider components={components}>
          <MarkDownContainer className="markdown-body">
            <Post />
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
