"use client";
import Image from "next/image";
import styled from "styled-components";
import ProjectPostBox from "./ProjectPostBox";

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 15rem;
  width: 70rem;
`;

const Index = styled.div`
  font-size: 4rem;
  margin: 1rem;
  margin-bottom: 5rem;
  text-align: center;
`;

const ProjectPreview = ({ scrollPointRef }) => {
  return (
    <Container ref={scrollPointRef}>
      <Index>Project</Index>
      <ProjectPostBox />
      <ProjectPostBox />
    </Container>
  );
};

export default ProjectPreview;
