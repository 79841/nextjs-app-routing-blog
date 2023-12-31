import PostTree from "@/server/components/PostTree";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  left: "0",
  top: "3rem",
  width: "30%",
  minWidth: "20rem",
  alignItems: "flex-end",
  paddingRight: "2rem",
};

const LeftSidebar = async ({ postsDir }) => {
  return (
    <div style={containerStyle} className="left-sidebar">
      <PostTree postsDir={postsDir} />
    </div>
  );
};

export default LeftSidebar;
