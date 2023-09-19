"use client";
import Image from "next/image";
import styled from "styled-components";

const ImageBox = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
  background-color: transparent;
`;

const CareerImage = ({ alt, src }) => {
  return (
    <ImageBox>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        style={{ objectFit: "contain" }}
      />
    </ImageBox>
  );
};

export default CareerImage;
