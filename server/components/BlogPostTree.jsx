import ClientBlogPostTree from "@/components/BlogPostTree/PostTree";
import fs from "fs";

const makeFileBasedPostTree = (
  path,
  fileTree = {
    name: "root",
    type: "category",
    path,
    children: [],
  },
  recursionCount = 0
) => {
  const files = fs.readdirSync(path, { withFileTypes: true });
  for (let file of files) {
    let filePath = `${path}/${file.name}`;
    if (file.isDirectory()) {
      const type = recursionCount === 0 ? "category" : "sub_category";
      const newDir = {
        name: file.name,
        type: type,
        children: [],
        path: filePath,
      };
      fileTree.children.push(newDir);
      makeFileBasedPostTree(filePath, newDir, recursionCount + 1);
    } else {
      fileTree.children.push({ name: file.name, type: "post", path: filePath });
    }
  }
  return fileTree;
};

const BlogPostTree = () => {
  const blogPostsDir = "./posts/blog";
  const postTree = makeFileBasedPostTree(blogPostsDir);
  return <ClientBlogPostTree tree={postTree} />;
};

export default BlogPostTree;
