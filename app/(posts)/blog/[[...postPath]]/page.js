import { BLOG_POSTS_DIR } from "@/components/PostTree/config";
import MdxViewer from "@/components/mdxViewer";
import { makeFileBasedDynamicPath } from "@/utils/makeFileBasedPostTree";

const containerStyle = {
  width: "100%",
  paddingTop: "7rem",
  boxSizing: "border-box",
};

export default function Page({ params: { postPath } }) {
  return (
    <div style={containerStyle}>
      {postPath ? <MdxViewer postPath={postPath} /> : <h1>Blog Main</h1>}
    </div>
  );
}

export async function generateStaticParams() {
  const postTree = makeFileBasedDynamicPath(BLOG_POSTS_DIR);
  const dynamicPath = postTree.map((post) => ({
    postPath: `${post.slice(BLOG_POSTS_DIR.length)}`.split("/").splice(1),
  }));
  return dynamicPath;
}
