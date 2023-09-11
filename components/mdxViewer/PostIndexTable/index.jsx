"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 10rem;
  display: flex;
  flex-direction: column;
  height: 1rem;
`;

const LevelVerticalBar = styled.div`
  width: 3px;
  height: 100%;
  background-color: #4f4f4f;
  margin-right: 1rem;
`;

const Index = styled.div`
  display: flex;
  height: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #828282;
`;

const PostIndexTable = () => {
  const postTable = useSelector(
    (state) => state.postIndexTableMaker.postIndexTable
  );
  return (
    <Container>
      {postTable.map((postIndex, i) => {
        return (
          <StyledLink key={i} href={`#${postIndex.name}`}>
            <Index>
              {Array.from({ length: postIndex.level }).map((_, i) => (
                <LevelVerticalBar key={i} />
              ))}
              {postIndex.name}
            </Index>
          </StyledLink>
        );
      })}
    </Container>
  );
};

export default PostIndexTable;
