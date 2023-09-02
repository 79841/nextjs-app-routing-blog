import Link from "next/link";
import { styled } from "styled-components";

const Container = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 15rem;
  list-style: none;
  z-index: 100;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
`;

const Nav = () => {
  return (
    <Container>
      <li>
        <StyledLink href="/">Home</StyledLink>
      </li>
      <li>
        <StyledLink href="/blog">Blog</StyledLink>
      </li>
      <li>
        <StyledLink href="/project">Project</StyledLink>
      </li>
    </Container>
  );
};

export default Nav;
