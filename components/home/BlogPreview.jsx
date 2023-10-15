"use client";
import Image from "next/image";
import styled from "styled-components";
import BlogPostCard from "./BlogPost";
import { ScrollShowBox } from "../ShowBox";

const Container = styled.div`
  padding-top: 5rem;
  margin-bottom: 10rem;
  width: 60%;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

const Index = styled.div`
  font-size: 4rem;
  margin: 1rem;
  margin-bottom: 10rem;
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

const BlogPreview = ({ scrollPointRef }) => {
  return (
    <Container ref={scrollPointRef}>
      <ScrollShowBox>
        <Index>Blog</Index>
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

export default BlogPreview;
