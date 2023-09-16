"use client";
import BlogPreview from "@/components/home/BlogPreview";
import Intro from "@/components/home/Intro";
import styled from "styled-components";
import ProjectPreview from "@/components/home/ProjectPreview";
import { useRef, useState } from "react";
import ScrollArrow from "@/components/shared/ScrollArrow";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
`;

export default function Home() {
  const scrollPointRef = useRef([]);

  return (
    <Container>
      <Intro scrollPointRef={(el) => (scrollPointRef.current[0] = el)} />
      <BlogPreview scrollPointRef={(el) => (scrollPointRef.current[1] = el)} />
      <ProjectPreview
        scrollPointRef={(el) => (scrollPointRef.current[2] = el)}
      />
      {/* <ScrollArrow scrollPointRef={scrollPointRef} /> */}
    </Container>
  );
}
