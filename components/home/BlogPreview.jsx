"use client";
import Image from "next/image";
import styled from "styled-components";
import BlogPostCard from "./BlogPost";
import { ScrollShowBox } from "../ShowBox";

const Container = styled.div`
  padding-top: 5rem;
  margin-bottom: 10rem;
  width: 70rem;
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