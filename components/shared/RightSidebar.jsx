import PostIndexTable from "../mdxViewer/PostIndexTable";

const style = {
  display: "flex",
  flexDirection: "column",
  // height: "100vh",
  right: 0,
  top: "3rem",
  width: "45rem",
  minWidth: "20rem",
  paddingLeft: "3rem",
};

const RightSidebar = () => {
  return (
    <div style={style}>
      <PostIndexTable />
    </div>
  );
};

export default RightSidebar;
