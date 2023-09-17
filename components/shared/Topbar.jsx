"use client";
import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: sticky;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  top: 0;
  height: 5rem;
  box-sizing: border-box;
  background-color: transparent;
  z-index: 100;
  /* 
  box-shadow: ${({ isScrolling }) =>
    isScrolling ? "0px 10px 5px 0px rgba(222,222,222,0.75)" : "none"}; */
  @media screen and (max-width: 500px) {
    padding: 1rem;
    height: 3rem;
  }
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
