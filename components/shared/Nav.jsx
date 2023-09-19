import Link from "next/link";
import { styled } from "styled-components";

const Container = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 15rem;
  list-style: none;
  z-index: 100;
`;

const ListStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  // width: "20%",
  listStyle: "none",
  zIndex: 100,
};

const LinkStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "1.2rem",
  margin: "0.5rem",
};

const Nav = () => {
  return (
    <ul style={ListStyle}>
      <li>
        <Link style={LinkStyle} href="/">
          Home
        </Link>
      </li>
      <li>
        <Link style={LinkStyle} href="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link style={LinkStyle} href="/project">
          Project
        </Link>
      </li>
      <li>
        <Link style={LinkStyle} href="/career">
          Career
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
