// "use client";
// import { styled } from "styled-components";

import { BLOG_POSTS_DIR } from "@/components/PostTree/config";
import { makeFileBasedDynamicPath } from "@/utils/makeFileBasedPostTree";

// import { useParams } from "next/navigation";

// const Container = styled.div`
//   flex-grow: 1;
//   width: 100%;
//   height: 100vh;
//   padding: 5rem;
// `;

const style = {
  // flexGrow: 1,
  // width: "100%",
  padding: "2rem",
  paddingTop: "10rem",
};

const Blog = () => {
  const postTree = makeFileBasedDynamicPath(BLOG_POSTS_DIR);
  const dynamicPath = postTree.map((post) => ({
    params: `${post.slice(BLOG_POSTS_DIR.length)}`.split("/").splice(1),
  }));
  console.log(dynamicPath);
  return <div style={style}>Blog</div>;
};

export default Blog;
