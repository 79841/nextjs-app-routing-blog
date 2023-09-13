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
  width: 70rem;
  margin-bottom: 15rem;
`;

const Phrases = styled.div`
  font-size: 4rem;
  text-align: center;
  margin-bottom: 3rem;
  animation: ${animation} 1s;
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
`;

const Symbol = ({ text, imgSrc, handleMouseOver, handleMouseOut }) => {
  return (
    <SymbolBox>
      <SymbolImage src={imgSrc} alt={text} fill />
      <SymbolTextBox onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {text}
      </SymbolTextBox>
    </SymbolBox>
  );
};

const Intro = ({ scrollPointRef }) => {
  const handleMouseOver = ({ target }) => {
    target.style.opacity = "1";
  };
  const handleMouseOut = ({ target }) => {
    target.style.opacity = "0";
  };
  return (
    <Container ref={scrollPointRef}>
      <Phrases>
        {"Hello, I'm 79841"}
        <br />
        {" a Web developer based in Seoul."}
      </Phrases>

      <SymbolsContainer>
        <ShowBox delay={"0.3s"}>
          <Symbol
            text="Developer"
            imgSrc={"https://legacy.reactjs.org/logo-og.png"}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
        </ShowBox>
        <ShowBox delay={"0.5s"}>
          <Symbol
            text="Developer"
            imgSrc={"https://legacy.reactjs.org/logo-og.png"}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
        </ShowBox>
        <ShowBox delay={"0.7s"}>
          <Symbol
            text="Developer"
            imgSrc={"https://legacy.reactjs.org/logo-og.png"}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
        </ShowBox>
        <ShowBox delay={"0.9s"}>
          <Symbol
            text="Developer"
            imgSrc={"https://legacy.reactjs.org/logo-og.png"}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
        </ShowBox>
        <ShowBox delay={"1.1s"}>
          <Symbol
            text="Developer"
            imgSrc={"https://legacy.reactjs.org/logo-og.png"}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
        </ShowBox>
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
