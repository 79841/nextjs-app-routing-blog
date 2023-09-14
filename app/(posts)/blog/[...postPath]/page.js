"use client";
import MdxViewer from "@/components/mdxViewer";
import dynamic from "next/dynamic";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const containerStyle = {
  width: "100%",
  /* padding: 2rem; */
  paddingTop: "7rem",
  boxSizing: "border-box",
};

export default function Page({ params }) {
  return (
    <div style={containerStyle}>
      <MdxViewer filePath={params} />
    </div>
  );
}
