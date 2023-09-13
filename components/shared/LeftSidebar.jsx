// "use client";
// import { styled } from "styled-components";

import PostTree from "@/server/components/PostTree";

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
  height: "100vh",
  left: "0",
  top: "3rem",
  width: "30%",
  minWidth: "20rem",
  alignItems: "flex-end",
  paddingRight: "2rem",
};

const LeftSidebar = async ({ postsDir }) => {
  return (
    <div style={containerStyle}>
      <PostTree postsDir={postsDir} />
    </div>
  );
};

export default LeftSidebar;
