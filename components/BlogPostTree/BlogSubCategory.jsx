import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
const Container = styled.div`
  color: red;
`;

const NameButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 1rem;
  height: 1rem;
  width: 100%;
  justify-content: space-between;
  border: none;
  outline: none;
`;

const Name = styled.div`
  color: red;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

const List = styled.ul`
  color: black;
  font-size: 1rem;
  font-weight: normal;
  list-style: none;
  overflow: hidden;
  max-height: 0;
  /* height: 0; */
  transition: max-height 0.5s ease-in-out;
`;

const BlogSubCategory = ({ name, branches }) => {
  const ref = useRef(null);
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList((prev) => !prev);
  };

  useEffect(() => {
    const categoryList = ref.current;

    if (showList) {
      categoryList.style.maxHeight = categoryList.scrollHeight + "px";
      setTimeout(() => {
        categoryList.style.maxHeight = "fit-content";
      }, 500);
    } else {
      categoryList.style.maxHeight = categoryList.scrollHeight + "px";
      setTimeout(() => {
        categoryList.style.maxHeight = 0;
      }, 5);
    }
  }, [showList]);

  return (
    <Container>
      <NameButton onClick={handleClick}>
        <Name>{name}</Name>
        {showList ? (
          <IoIosArrowDown size={15} />
        ) : (
          <IoIosArrowForward size={15} />
        )}
      </NameButton>

      <List ref={ref}>{branches}</List>
    </Container>
  );
};

export default BlogSubCategory;
