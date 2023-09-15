"use client";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { highlightColor, normalColor } from "./style";
import { useEffect, useState } from "react";

const Container = styled.div`
  position: sticky;
  top: 10rem;
  display: flex;
  flex-direction: column;
`;

const SpaceByLevel = styled.div`
  width: 0.5rem;
  height: 100%;
  /* background-color: ${highlightColor}; */
  /* margin-right: 0.7rem; */
`;

const Index = styled.div`
  display: flex;
  height: 100%;
  height: 1.5rem;
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ color }) => color};
  cursor: pointer;
  &:hover {
    color: ${highlightColor};
  }
`;

const PostIndexTable = () => {
  const postTable = useSelector(
    (state) => state.postIndexTableMaker.postIndexTable
  );

  const [currentContent, setCurrentContent] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (postTable.length === 0) {
        return;
      }
      const currentContent = postTable.reduce((acc, cur) => {
        const startLinePosY = 50;
        const currentPosY = cur.ref.getBoundingClientRect().y;
        const accPosY = acc.ref.getBoundingClientRect().y;
        if (
          currentPosY <= startLinePosY &&
          startLinePosY - currentPosY < startLinePosY - accPosY
        ) {
          return cur;
        } else {
          return acc;
        }
      });
      setCurrentContent(currentContent.ref.innerText);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [postTable]);
  return (
    <Container>
      {postTable.map((postIndex, i) => {
        const indexName = postIndex.ref.innerText;
        const color =
          indexName === currentContent ? highlightColor : normalColor;
        return (
          <StyledLink
            key={i}
            to={`${indexName}`}
            activeClass="active"
            spy={true}
            smooth={true}
            color={color}
          >
            <Index>
              {Array.from({ length: postIndex.level }).map((_, i) => (
                <SpaceByLevel key={i} />
              ))}

              {indexName}
            </Index>
          </StyledLink>
        );
      })}
    </Container>
  );
};

export default PostIndexTable;
