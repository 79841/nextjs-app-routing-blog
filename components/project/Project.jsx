import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 1rem;
  box-shadow: 10px 10px 5px 0px rgba(189, 189, 189, 0.75);

  background-color: white;
`;

const Thumbnail = styled(Image)`
  width: 20rem;
  height: 20rem;
  border: 1px solid black;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 1.5rem;
`;
const Content = styled.div`
  font-size: 1rem;
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

const Project = () => {
  return (
    <Container>
      <Thumbnail
        src="https://d604h6pkko9r0.cloudfront.net/wp-content/uploads/2021/03/29113740/nextjs-cover.jpg"
        alt=""
        width={1000}
        height={582}
      />
      <TextData />
    </Container>
  );
};

export default Project;
