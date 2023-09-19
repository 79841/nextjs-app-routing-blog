import Image from "next/image";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ShowBox from "../ShowBox";

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
  width: 60%;
  margin-bottom: 15rem;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Phrases = styled.div`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 3rem;
  animation: ${animation} 1s;
  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
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
  /* border-radius: 2rem; */
  background-color: #dcdcdc;
  object-fit: cover;
  box-shadow: 10px 10px 5px 0px rgba(189, 189, 189, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(189, 189, 189, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(189, 189, 189, 0.75);
`;

const SymbolsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  flex-wrap: wrap;
`;

const SymbolBox = styled.div`
  width: 17rem;
  height: 17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  position: relative;
  overflow: hidden;
  &:hover img {
    transform: scale(1.1);
  }

  @media screen and (max-width: 500px) {
    position: relative;
    width: 100%;
    padding-top: 50%;
    margin: 0;
    height: 4rem;
  }
`;

const SymbolImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.5s;
`;

const SymbolTextBox = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 500;
  opacity: 0;
  transition: all 0.5s;
  display: flex;
  &:hover {
    opacity: 1;
  }
`;

const Symbol = ({ text, imgSrc, delay }) => {
  return (
    <SymbolBox>
      <ShowBox delay={delay}>
        <SymbolImage src={imgSrc} alt={text} fill unoptimized />
        <SymbolTextBox>{text}</SymbolTextBox>
      </ShowBox>
    </SymbolBox>
  );
};

const Intro = ({ scrollPointRef }) => {
  const symbols = [
    { name: "React", imgSrc: "https://legacy.reactjs.org/logo-og.png" },
    {
      name: "Nextjs",
      imgSrc:
        "https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2021/03/29113740/nextjs-cover.jpg",
    },
    {
      name: "Typescript",
      imgSrc: "https://logowik.com/content/uploads/images/typescript2034.jpg",
    },
    {
      name: "Javascript",
      imgSrc:
        "https://i.namu.wiki/i/vlGWS9ndOh9jGZsJlZLz5lVF1mN4SozXp3gJh28HCd0jIREKDmkPu2Fg4sxqx0Cf5DlIgm5LRcDsSMCelk1VR8aGSEE8MHbqL-NrO0mcB1XH6b86zJUrqKFZEfaWqYtSM3ePqZe92SW_fzyaIQFTAA.svg",
    },
    {
      name: "Web Hacking",
      imgSrc:
        "https://images-platform.99static.com//UUYpXRPoW4zZsS-8aKdYShUzQNk=/0x0:1812x1812/fit-in/590x590/99designs-contests-attachments/132/132674/attachment_132674120",
    },
  ];

  return (
    <Container ref={scrollPointRef}>
      <Phrases>
        {"Hello, I'm 79841"}
        <br />
        {" a Web developer based in Seoul."}
      </Phrases>

      <SymbolsContainer>
        {symbols.map((symbol, i) => (
          <Symbol
            key={i}
            text={symbol.name}
            imgSrc={symbol.imgSrc}
            delay={`${0.2 * i}s`}
          />
        ))}
        {/* <Symbol
            text="React"
            imgSrc={"https://legacy.reactjs.org/logo-og.png"}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
          <Symbol
            text="Nextjs"
            imgSrc={
              "https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2021/03/29113740/nextjs-cover.jpg"
            }
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
          <Symbol
            text="Typescript"
            imgSrc={
              "https://logowik.com/content/uploads/images/typescript2034.jpg"
            }
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
          <Symbol
            text="Javascript"
            imgSrc={
              "https://i.namu.wiki/i/vlGWS9ndOh9jGZsJlZLz5lVF1mN4SozXp3gJh28HCd0jIREKDmkPu2Fg4sxqx0Cf5DlIgm5LRcDsSMCelk1VR8aGSEE8MHbqL-NrO0mcB1XH6b86zJUrqKFZEfaWqYtSM3ePqZe92SW_fzyaIQFTAA.svg"
            }
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
          <Symbol
            text="Web Hacking"
            imgSrc={
              "https://images-platform.99static.com//UUYpXRPoW4zZsS-8aKdYShUzQNk=/0x0:1812x1812/fit-in/590x590/99designs-contests-attachments/132/132674/attachment_132674120"
            }
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          /> */}
      </SymbolsContainer>
      {/* <ImageContainer>
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
      </ImageContainer> */}
    </Container>
  );
};

export default Intro;
