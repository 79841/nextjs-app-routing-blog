import LeftSidebar from "@/components/shared/LeftSidebar";
import "../../globals.css";
import RightSidebar from "@/components/shared/RightSidebar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const blogContainerStyle = {
  boxSizing: "border-box",
  width: "40%",
  minWidth: "50rem",
};

export default function BlogLayout({ children }) {
  return (
    <>
      <LeftSidebar postsDir={"./posts/blog"} />
      <div style={blogContainerStyle}>{children}</div>
      <RightSidebar />
    </>
  );
}