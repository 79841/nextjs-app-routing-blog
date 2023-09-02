"use client";
import Image from "next/image";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
    0%{
        transform:translateY(3rem);
        opacity:0;
    }
    100%{
        transform:translateY(0);
        opacity:1;
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
  width: 70rem;
  margin-bottom: 15rem;
  animation: ${animation} 1s;
`;

const Phrases = styled.div`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const ImageContainer = styled.div`
  height: 45rem;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  /* border: 1px solid black; */
  width: 30rem;
  height: 45rem;
  margin: 1rem;
  border-radius: 2rem;
  background-color: #dcdcdc;
  object-fit: cover;
  box-shadow: 10px 10px 5px 0px rgba(189, 189, 189, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(189, 189, 189, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(189, 189, 189, 0.75);
`;

const Intro = ({ scrollPointRef }) => {
  return (
    <Container ref={scrollPointRef}>
      <Phrases>
        {"Hello, I'm 79841"}
        <br />
        {" a Web developer based in Seoul."}
      </Phrases>
      <ImageContainer>
        <StyledImage
          src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg"
          alt=""
          width={300}
          height={450}
        />
        <StyledImage
          src="https://cdn3.vectorstock.com/i/1000x1000/38/42/hacker-character-avatar-icon-vector-11573842.jpg"
          alt=""
          width={300}
          height={450}
        />
      </ImageContainer>
    </Container>
  );
};

export default Intro;
