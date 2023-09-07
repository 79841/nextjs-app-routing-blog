"use client";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  right: 0;
  top: 3rem;
  width: 35rem;
  border: 1px solid black;
`;
const RightSidebar = () => {
  return <Container>rightsidebar</Container>;
};

export default RightSidebar;
