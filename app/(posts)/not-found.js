"use client";
import Link from "next/link";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */

  box-sizing: border-box;
  padding: 10%;
`;
export default function NotFound() {
  console.log("not found posts");
  return (
    <Container>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Container>
  );
}
