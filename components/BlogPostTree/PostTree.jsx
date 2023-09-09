"use client";
import Link from "next/link";
import styled from "styled-components";
import SubCategory from "./SubCategory";
import {
  MainCategoryFontSize,
  MainCategoryFontWeight,
  categoryFontWeight,
  postTreeBoxHeight,
  postTreeFontSize,
} from "./style";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSelectPost from "@/hooks/useSelectPost";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { select } from "@/redux/postSelectorSlice";
import Title, { TitleButton, TitleLink, TitleVerticalBar } from "./Title";
import { blogPath } from "./config";

const Container = styled.div`
  position: relative;
  & > div {
    position: absolute;
    width: 15rem;
    top: 10rem;
    right: 3rem;
  }
`;

const MainCategoryContainer = styled.div`
  & > ul {
    font-size: ${MainCategoryFontSize};
    font-weight: ${MainCategoryFontWeight};
    list-style: none;
  }
`;

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
  const link = `/blog${tree.path.slice(blogPath.length)}`;
  // const link = filePath.slice(filePath.lastIndexOf("."));
  return (
    <StyledLi>
      <TitleLink href={link}>
        <TitleButton onClick={handleClick}>
          {Array.from({
            length: tree.path.slice(blogPath.length).split("/").length - 2,
          }).map((_, i) => (
            <TitleVerticalBar key={i} />
          ))}
          {tree.name.slice(0, tree.name.lastIndexOf("."))}
        </TitleButton>
      </TitleLink>
    </StyledLi>
  );
};

const MainCategory = ({ name, path, branches }) => {
  return (
    <MainCategoryContainer>
      {name !== "root" ? (
        <Title>
          <TitleLink href={`/blog${path.slice(blogPath.length)}/index.mdx`}>
            {name}
          </TitleLink>
        </Title>
      ) : null}

      <ul>{branches}</ul>
    </MainCategoryContainer>
  );
};

const Category = ({ tree }) => {
  const makeBranches = (tree) =>
    tree?.children?.map((branch) => (
      <LinkTree key={branch.name} tree={branch} />
    ));
  if (tree.type === "category") {
    return (
      <MainCategory
        name={tree.name}
        path={tree.path}
        branches={makeBranches(tree)}
      />
    );
  } else {
    return (
      <SubCategory
        name={tree.name}
        path={tree.path}
        branches={makeBranches(tree)}
      />
    );
  }
};

const LinkTree = ({ tree }) => {
  if (tree.type === "post") {
    return <Post tree={tree} />;
  } else {
    return <Category tree={tree} />;
  }
};

const BptContext = createContext();
export const useBptContext = () => useContext(BptContext);

const PostTree = ({ tree }) => {
  const [selected, setSelected] = useState(null);
  const handleSelect = ({ target }) => {
    if (selected !== null && selected !== target) {
      selected.style.color = "black";
    }

    setSelected(target);
  };

  useEffect(() => {
    if (selected) {
      selected.style.color = "#6fadc2";
    }
  }, [selected]);
  return (
    <BptContext.Provider value={handleSelect}>
      <Container>
        <div>
          <LinkTree tree={tree} />
        </div>
      </Container>
    </BptContext.Provider>
  );
};

export default PostTree;
