import MdxViewer from "@/components/mdxViewer";
import CareerImage from "@/components/mdxViewer/image/CareerImage";

export const metadata = {
  title: "Career",
};

const containerStyle = {
  width: "40rem",
  boxSizing: "border-box",
  //   margin: "4rem 0 4rem 0",
};

export default function Page() {
  return (
    <div style={containerStyle}>
      <MdxViewer postPath={"career/index"} ImageBox={CareerImage} />
    </div>
  );
}
