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
import { select } from "@/redux/features/postSelectorSlice";
import Title, { TitleButton, TitleLink, TitleVerticalBar } from "./Title";
import { blogPath } from "./config";
import MainCategory from "./MainCategory";
import Post from "./Post";

const Container = styled.div`
  position: sticky;
  width: 18rem;
  top: 9rem;
  right: 0;
  overflow: hidden;
`;

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
        <LinkTree tree={tree} />
      </Container>
    </BptContext.Provider>
  );
};

export default PostTree;
