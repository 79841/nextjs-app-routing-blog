import ClientPostTree from "@/components/PostTree/PostTree";
import makeFileBasedPostTree from "@/utils/makeFileBasedPostTree";

const PostTree = ({ postsDir }) => {
  const postTree = makeFileBasedPostTree(postsDir);
  return <ClientPostTree tree={postTree} />;
};

export default PostTree;
