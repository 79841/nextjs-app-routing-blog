"use client";
import Link from "next/link";
import styled from "styled-components";
import BlogSubCategory from "./BlogSubCategory";

const Container = styled.div`
  position: fixed;
  top: 5rem;
  left: 5rem;
`;

const BlogCategoryContainer = styled.div`
  & > ul {
    font-size: 1rem;
    font-weight: bold;
    list-style: none;
  }
`;

const BlogPost = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: normal;
  height: 1rem;
`;

const BlogCategory = ({ name, branches }) => {
  return (
    <BlogCategoryContainer>
      <div>{name}</div>
      <ul>{branches}</ul>
    </BlogCategoryContainer>
  );
};

const BlogLinkTree = ({ tree }) => {
  const name = tree.name !== "root" ? tree.name : null;
  const branches = tree?.children?.map((branch) => (
    <BlogLinkTree key={branch.name} tree={branch} />
  ));

  if (tree.type === "category") {
    return <BlogCategory name={name} branches={branches} />;
  } else if (tree.type === "sub_category") {
    return <BlogSubCategory name={name} branches={branches} />;
  } else {
    return <BlogPost>{tree.name}</BlogPost>;
  }
};

const BlogPostTree = ({ tree }) => {
  return (
    <Container>
      <BlogLinkTree tree={tree} />
    </Container>
  );
};

export default BlogPostTree;
