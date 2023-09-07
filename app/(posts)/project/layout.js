import Topbar from "@/components/shared/Topbar";
import "../../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function BlogLayout({ children }) {
  return (
    <>
      <LeftSidebar />
      {children}
      <RightSidebar />
    </>
  );
}
