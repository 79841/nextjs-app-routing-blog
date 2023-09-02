"use client";
import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  padding-left: 15%;
  padding-right: 15%;
  position: fixed;
  top: 0;
  width: 100%;
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
