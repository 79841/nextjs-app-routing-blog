"use client";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #aaa;
  right: 0;
  top: 3rem;
  width: 50rem;
`;
const RightSidebar = () => {
  return <Container>rightsidebar</Container>;
};

export default RightSidebar;
