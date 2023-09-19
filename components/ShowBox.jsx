import { useEffect, useRef } from "react";
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

const ShowBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${animation} 1s forwards;
  animation-delay: ${({ delay }) => delay || "0s"};
`;

const Container = styled.div`
  opacity: 0;
  transform: translateY(4rem);
  transition: all 1.5s;
  width: 100%;
`;

export const ScrollShowBox = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const posY = ref.current.getBoundingClientRect().y;
      if (posY < 450) {
        ref.current.style.opacity = "1";
        ref.current.style.transform = "translateY(0rem)";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <Container ref={ref}>{children}</Container>;
};

export default ShowBox;
