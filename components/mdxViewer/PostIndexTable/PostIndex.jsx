import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, reset } from "@/redux/features/postIndexTableMakerSlice";
import { styled } from "styled-components";

const PostIndex = ({ children, level }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(add({ name: children, level }));
    return () => {
      dispatch(reset());
    };
  }, [dispatch, children, level]);

  return <div id={children}>{children}</div>;
};

export default PostIndex;
