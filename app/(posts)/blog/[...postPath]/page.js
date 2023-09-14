import MdxViewer from "@/components/mdxViewer";

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
