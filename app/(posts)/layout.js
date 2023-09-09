import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function PostsLayout({ children }) {
  return (
    <main className={"posts-container"}>
      <LeftSidebar />
      <div className={"blog-container"}>{children}</div>
      {/* <RightSidebar /> */}
    </main>
  );
}
