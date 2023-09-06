import Link from "next/link";
import { styled } from "styled-components";

const Container = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 15rem;
  list-style: none;
  z-index: 100;
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: black;
//   font-size: 1.2rem;
// `;
const ListStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "15rem",
  listStyle: "none",
  zIndex: 100,
};

const LinkStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "1.2rem",
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
    </ul>
  );
};

export default Nav;
