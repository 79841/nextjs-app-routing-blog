// "use client";
// import MdxViewer from "@/components/mdxViewer";
// import { useParams } from "next/navigation";

const containerStyle = {
  width: "100%",
  /* padding: 2rem; */
  paddingTop: "7rem",
  boxSizing: "border-box",
};

export default function Page() {
  // const params = useParams();
  // console.log("pathparams");
  // console.log(params);

  return (
    <div style={containerStyle}>{/* <MdxViewer filePath={params} /> */}</div>
  );
}
