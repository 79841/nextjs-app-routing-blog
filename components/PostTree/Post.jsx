import { styled } from "styled-components";
import { TitleButton, TitleLink, TitleVerticalBar } from "./Title";
import { postTreeBoxHeight, postTreeFontSize } from "./style";
import { useBptContext } from "./PostTree";
import { BLOG_POSTS_DIR } from "./config";

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  font-size: ${postTreeFontSize};
  font-weight: normal;
  height: ${postTreeBoxHeight};
`;

const Post = ({ tree }) => {
  const handleClick = useBptContext();
  if (tree.name === "index.mdx") {
    return null;
  }
  const link = `/blog${tree.path.slice(BLOG_POSTS_DIR.length)}`;
  // const link = filePath.slice(filePath.lastIndexOf("."));
  return (
    <StyledLi>
      <TitleLink href={link}>
        <TitleButton onClick={handleClick}>
          {Array.from({
            length:
              tree.path.slice(BLOG_POSTS_DIR.length).split("/").length - 2,
          }).map((_, i) => (
            <TitleVerticalBar key={i} />
          ))}
          {tree.name.slice(0, tree.name.lastIndexOf("."))}
        </TitleButton>
      </TitleLink>
    </StyledLi>
  );
};
export default Post;
