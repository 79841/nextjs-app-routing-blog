"use client";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* border: 1px solid black; */
  box-sizing: border-box;
`;
export default function Page({ params }) {
  const Post = dynamic(
    () =>
      import(`@/posts/blog/${params.postPath.join("/")}`).catch((err) => {
        return notFound();
      }),
    {
      loading: () => <p>Loading...</p>,
      ssr: false,
    }
  );

  return (
    <Container>
      <Post />
    </Container>
  );
}
