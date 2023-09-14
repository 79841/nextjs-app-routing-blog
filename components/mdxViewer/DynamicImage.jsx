import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";

function getImageDimensions(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.onerror = (error) => {
      reject(error);
    };
    img.src = url;
  });
}

const DynamicImage = ({ alt, src }) => {
  const [imageSize, setImageSize] = useState(null);
  const ref = useRef(null);
  useEffect(() => {
    getImageDimensions(src)
      .then((dimensions) => {
        const width = ref.current.offsetWidth;
        const height = (width / dimensions.width) * dimensions.height;
        setImageSize([width, height]);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, [src]);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2rem",
        position: "relative",
      }}
    >
      {imageSize !== null ? (
        <NextImage
          alt={alt}
          src={src}
          width={Math.round(imageSize[0])}
          height={Math.round(imageSize[1])}
          quality={100}
          style={{
            objectFit: "contain",
            maxHeight: "30rem",
            width: "100%",
            height: "auto",
          }}
          unoptimized
        />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default DynamicImage;
