import { BLOG_POSTS_DIR } from "@/components/PostTree/config";
import MdxViewer from "@/components/mdxViewer";
import { makeFileBasedDynamicPath } from "@/utils/makeFileBasedPostTree";

const containerStyle = {
  width: "100%",
  boxSizing: "border-box",
  margin: "4rem 0 4rem 0",
};

export default function Page({ params: { postPath } }) {
  const realPostPath = postPath
    ? `blog/${postPath.map((e) => decodeURIComponent(e)).join("/")}`
    : null;

  console.log(realPostPath);

  return (
    <div style={containerStyle}>
      {realPostPath ? (
        <MdxViewer postPath={realPostPath} />
      ) : (
        <h1>Blog Main</h1>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const postTree = makeFileBasedDynamicPath(BLOG_POSTS_DIR);
  const dynamicPath = [
    ...postTree.map((post) => ({
      postPath: `${post.slice(BLOG_POSTS_DIR.length)}`.split("/").splice(1),
    })),
    { postPath: [] },
  ];
  return dynamicPath;
}
