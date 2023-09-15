import PostIndexTable from "../mdxViewer/PostIndexTable";

const style = {
  display: "flex",
  flexDirection: "column",
  right: 0,
  top: "3rem",
  width: "30%",
  minWidth: "20rem",
  paddingLeft: "2rem",
  height: "100vh",
};

const RightSidebar = () => {
  return (
    <div style={style}>
      <PostIndexTable />
    </div>
  );
};

export default RightSidebar;
