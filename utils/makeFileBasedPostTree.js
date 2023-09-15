import fs from "fs";

export const makeFileBasedDynamicPath = (path, pathList = []) => {
  const files = fs.readdirSync(path, { withFileTypes: true });
  for (let file of files) {
    let filePath = `${path}/${file.name}`;
    if (file.isDirectory()) {
      pathList.push(`${filePath}/index.mdx`);
      makeFileBasedDynamicPath(filePath, pathList);
    } else {
      pathList.push(filePath);
    }
  }
  return pathList;
};

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

export default makeFileBasedPostTree;
