// import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const postsContainerStyle = {
  display: "flex",
  width: "100%",
  minHeight: "100vh",
  justifyContent: "flex-start",
};

export default function PostsLayout({ children }) {
  return <main style={postsContainerStyle}>{children}</main>;
}
