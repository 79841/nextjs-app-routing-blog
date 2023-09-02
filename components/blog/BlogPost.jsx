import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-top: 1rem;
`;

const Thumbnail = styled(Image)`
  width: 20rem;
  height: 20rem;
  /* border-radius: 1rem; */
  border: 1px solid black;
`;

const Title = styled.div`
  font-size: 2rem;
`;
const Content = styled.div`
  font-size: 1.2rem;
`;

const TextDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const TextData = () => (
  <TextDataContainer>
    <Title>Title</Title>
    <Content>Content</Content>
  </TextDataContainer>
);

const BlogPost = () => {
  return (
    <Container>
      <Thumbnail src="" alt="" />
      <TextData />
    </Container>
  );
};

export default BlogPost;
