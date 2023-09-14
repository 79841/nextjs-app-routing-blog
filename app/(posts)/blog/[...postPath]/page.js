"use client";
import MdxViewer from "@/components/mdxViewer";
import dynamic from "next/dynamic";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  /* padding: 2rem; */
  padding-top: 7rem;
  box-sizing: border-box;
`;

export default function Page({ params }) {
  const p = useParams();
  console.log(p);
  // const Post = dynamic(
  //   () =>
  //     import(`@/posts/blog/${params.postPath.join("/")}`).catch((err) => {
  //       return notFound();
  //     }),
  //   {
  //     loading: () => <p>Loading...</p>,
  //     ssr: false,
  //   }
  // );

  return (
    <Container>
      {/* <MdxViewer>
        <Post />
      </MdxViewer> */}
    </Container>
  );
}
