import { styled } from "styled-components";
import Title, { TitleButton, TitleLink } from "./Title";
import {
  MainCategoryFontSize,
  MainCategoryFontWeight,
  postTreeFontSize,
} from "./style";
import { blogPath } from "./config";
import { useBptContext } from "./PostTree";

const MainCategoryContainer = styled.div`
  /* & > ul {
    font-size: ${MainCategoryFontSize};
    font-weight: ${MainCategoryFontWeight};
    list-style: none;
  } */
`;

const List = styled.ul`
  color: black;
  font-size: ${postTreeFontSize};
  font-weight: normal;
  list-style: none;
  overflow: hidden;
  padding: 0;
  /* max-height: 0; */
  /* transition: max-height 0.5s ease-in-out; */
`;

const MainCategory = ({ name, path, branches }) => {
  const handleClick = useBptContext();
  return (
    <MainCategoryContainer>
      {name !== "root" ? (
        <Title>
          <TitleLink href={`/blog${path.slice(blogPath.length)}/index.mdx`}>
            <TitleButton
              onClick={handleClick}
              style={{
                fontSize: MainCategoryFontSize,
                fontWeight: MainCategoryFontWeight,
              }}
            >
              {name}
            </TitleButton>
          </TitleLink>
        </Title>
      ) : null}
      <List>{branches}</List>
    </MainCategoryContainer>
  );
};

export default MainCategory;
