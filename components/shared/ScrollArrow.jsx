import { useState } from "react";
import { VscArrowDown } from "react-icons/vsc";
import { VscArrowUp } from "react-icons/vsc";
import styled from "styled-components";

const Container = styled.button`
  position: fixed;
  bottom: 4rem;
  right: 7rem;
  background-color: transparent;
  border: 0;
`;

const ScrollArrow = ({ scrollPointRef }) => {
  const [scrollPoint, setScrollPoint] = useState(0);

  const handleClick = () => {
    console.log(scrollPoint);
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
    <Container onClick={handleClick}>
      {scrollPointRef.current.lenght - 1 !== scrollPoint ? (
        <VscArrowDown size={30} />
      ) : (
        <VscArrowUp size={30} />
      )}
    </Container>
  );
};

export default ScrollArrow;
