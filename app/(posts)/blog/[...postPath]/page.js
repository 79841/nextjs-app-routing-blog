import { BLOG_POSTS_DIR } from "@/components/PostTree/config";
import MdxViewer from "@/components/mdxViewer";
import makeFileBasedPostTree, {
  makeFileBasedDynamicPath,
} from "@/utils/makeFileBasedPostTree";

const containerStyle = {
  width: "100%",
  /* padding: 2rem; */
  paddingTop: "7rem",
  boxSizing: "border-box",
};

export default function Page({ params }) {
  console.log(params);
  return (
    <div style={containerStyle}>
      <MdxViewer filePath={params} />
    </div>
  );
}

export async function generateStaticParams() {
  const postTree = makeFileBasedDynamicPath(BLOG_POSTS_DIR);
  const dynamicPath = postTree.map((post) => ({
    params: `${post.slice(BLOG_POSTS_DIR.length)}`.split("/").splice(1),
  }));
  return dynamicPath;
}
