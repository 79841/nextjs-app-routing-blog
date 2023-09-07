import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { useContext, useEffect, useRef, useState } from "react";
import { postTreeBoxHeight, postTreeFontSize } from "./style";
import { useBptContext } from "./PostTree";
import Name, {
  ArrowButton,
  NameBox,
  Title,
  TitleButton,
  TitleLink,
  TitleVerticalBar,
} from "./Title";
import { blogPath } from "./config";
const Container = styled.div``;

const List = styled.ul`
  color: black;
  font-size: ${postTreeFontSize};
  font-weight: normal;
  list-style: none;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-in-out;
`;

const SubCategory = ({ name, path, branches }) => {
  const ref = useRef(null);
  const [showList, setShowList] = useState(false);
  const handleSelect = useBptContext();

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
      <Title>
        <TitleLink href={`/blog${path.slice(blogPath.length)}/index.mdx`}>
          <TitleButton
            onClick={(e) => {
              handleClick();
              handleSelect(e);
            }}
          >
            {Array.from({
              length: path.slice(blogPath.length).split("/").length - 2,
            }).map((_, i) => (
              <TitleVerticalBar key={i} />
            ))}
            {name}
          </TitleButton>
        </TitleLink>
        <ArrowButton onClick={handleClick}>
          {showList ? (
            <IoIosArrowDown size={15} />
          ) : (
            <IoIosArrowForward size={15} />
          )}
        </ArrowButton>
      </Title>

      <List ref={ref}>{branches}</List>
    </Container>
  );
};

export default SubCategory;
