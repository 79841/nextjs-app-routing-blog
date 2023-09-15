import LeftSidebar from "@/components/shared/LeftSidebar";
import "../../../globals.css";
import RightSidebar from "@/components/shared/RightSidebar";
import { BLOG_POSTS_DIR } from "@/components/PostTree/config";

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
      <LeftSidebar postsDir={BLOG_POSTS_DIR} />
      <div style={blogContainerStyle}>{children}</div>
      <RightSidebar />
    </>
  );
}
