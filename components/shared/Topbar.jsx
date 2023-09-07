"use client";
import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: fixed;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  top: 0;
  height: 5rem;
  box-sizing: border-box;
`;

const Topbar = () => {
  return (
    <Container>
      <Logo />
      <Nav />
    </Container>
  );
};

export default Topbar;
