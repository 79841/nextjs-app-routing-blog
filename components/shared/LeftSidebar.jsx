// "use client";
// import { styled } from "styled-components";

import BlogPostTree from "@/server/components/BlogPostTree";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   background-color: #aaa;
//   left: 0;
//   top: 3rem;
//   width: 50rem;
// `;

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  // height: "100vh",
  left: "0",
  top: "3rem",
  width: "45rem",
  minWidth: "20rem",
};

const LeftSidebar = async () => {
  return (
    <div style={containerStyle}>
      <BlogPostTree />
    </div>
  );
};

export default LeftSidebar;
