import styled from "styled-components";
import { postTreeBoxHeight, postTreeFontSize } from "./style";
import Link from "next/link";

export const TitleLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 100%;
`;

export const TitleButton = styled.button`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: ${postTreeFontSize};
  border: none;
  outline: none;
  background-color: transparent;
  min-width: 90%;
  width: 100%;
`;

export const TitleVerticalBar = styled.div`
  width: 1px;
  height: ${postTreeBoxHeight};
  background-color: #515151;
  margin-left: 0.3rem;
  margin-right: 1.7rem;
`;

export const ArrowButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  height: ${postTreeBoxHeight};
  width: 100%;
  justify-content: space-between;
  border: none;
  outline: none;
`;

export default Title;
