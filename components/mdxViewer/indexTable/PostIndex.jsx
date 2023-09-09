import { useRef } from "react";

const PostIndex = ({ children }) => {
  console.log(children);

  const ref = useRef(null);

  return <h1 ref={ref}>{children}</h1>;
};

export default PostIndex;
