"use client";
import Image from "next/image";
import styled from "styled-components";
import ProjectPostBox from "./ProjectPostBox";
import { ScrollShowBox } from "../ShowBox";
import BlogPostCard from "./BlogPost";

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 15rem;
  width: 100%;
`;

const Index = styled.div`
  font-size: 4rem;
  margin: 1rem;
  margin-bottom: 5rem;
  text-align: center;
`;

const BlogPostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectPreview = ({ scrollPointRef }) => {
  return (
    <Container ref={scrollPointRef}>
      <ScrollShowBox>
        <Index>Project</Index>
      </ScrollShowBox>
      <ScrollShowBox>
        <BlogPostContainer>
          <BlogPostCard />
          <BlogPostCard />
          <BlogPostCard />
        </BlogPostContainer>
      </ScrollShowBox>
    </Container>
  );
};

export default ProjectPreview;
