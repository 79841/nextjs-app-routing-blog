import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  background-color: white;
  box-shadow: 10px 10px 5px 0px rgba(189, 189, 189, 0.75);
  width: 20rem;
`;

const Thumbnail = styled(Image)`
  width: 20rem;
  height: 20rem;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 1.2rem;
`;
const Content = styled.div`
  font-size: 1rem;
`;

const TextDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  height: 5rem;
`;

const TextData = () => (
  <TextDataContainer>
    <Title>Title</Title>
    <Content>Content</Content>
  </TextDataContainer>
);

const BlogPostCard = () => {
  return (
    <Container>
      <Thumbnail
        src="https://legacy.reactjs.org/logo-og.png"
        width={400}
        height={400}
        alt="react"
        unoptimized
      />
      <TextData />
    </Container>
  );
};

export default BlogPostCard;
