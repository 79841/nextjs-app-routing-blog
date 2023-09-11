import { styled } from "styled-components";
import Title, { TitleButton, TitleLink } from "./Title";
import { MainCategoryFontSize, MainCategoryFontWeight } from "./style";
import { blogPath } from "./config";
import { useBptContext } from "./PostTree";

const MainCategoryContainer = styled.div`
  /* & > ul {
    font-size: ${MainCategoryFontSize};
    font-weight: ${MainCategoryFontWeight};
    list-style: none;
  } */
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
      <ul>{branches}</ul>
    </MainCategoryContainer>
  );
};

export default MainCategory;
