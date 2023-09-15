"use client";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, reset } from "@/redux/features/postIndexTableMakerSlice";
import { styled } from "styled-components";

const PostIndex = ({ children, level }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  useEffect(() => {
    function handleScroll() {}

    dispatch(add({ ref: ref.current, level }));
    window.addEventListener("scroll", handleScroll);
    return () => {
      dispatch(reset());
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, children, level]);

  return (
    <div ref={ref} id={children}>
      {children}
    </div>
  );
};

export default PostIndex;
