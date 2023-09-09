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
  position: fixed;
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  top: 0;
  height: 5rem;
  box-sizing: border-box;
  background-color: #fbfbfb;
  z-index:100;

  box-shadow: ${({isScrolling})=>isScrolling?"0px 10px 5px 0px rgba(222,222,222,0.75)":"none"};

`;

const Topbar = () => {

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    // 스크롤 이벤트를 추가하고 컴포넌트가 언마운트될 때 이벤트를 정리합니다.
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container isScrolling={isScrolling}>
      <Logo />
      <Nav />
    </Container>
  );
};

export default Topbar;
