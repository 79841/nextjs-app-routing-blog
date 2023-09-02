"use client";
import BlogPreview from "@/components/home/BlogPreview";
import Intro from "@/components/home/Intro";
import styled from "styled-components";
import ProjectPreview from "@/components/home/ProjectPreview";
import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  width: 7rem;
  height: 7rem;
  background-color: black;
  border-radius: 50%;
  color: white;
`;

export default function Home() {
  const scrollPointRef = useRef([]);
  const [scrollPoint, setScrollPoint] = useState(0);

  const handleClick = () => {
    console.log(scrollPointRef.current);
    if (scrollPoint === scrollPointRef.current.length - 1) {
      scrollPointRef.current[0].scrollIntoView({ behavior: "smooth" });
      setScrollPoint(0);
    } else {
      scrollPointRef.current[scrollPoint + 1].scrollIntoView({
        behavior: "smooth",
      });
      setScrollPoint((prev) => prev + 1);
    }
  };

  return (
    <Container>
      <Intro scrollPointRef={(el) => (scrollPointRef.current[0] = el)} />
      <BlogPreview scrollPointRef={(el) => (scrollPointRef.current[1] = el)} />
      <ProjectPreview
        scrollPointRef={(el) => (scrollPointRef.current[2] = el)}
      />
      <ScrollButton onClick={handleClick}>
        <IoIosArrowDown />
      </ScrollButton>
    </Container>
  );
}
