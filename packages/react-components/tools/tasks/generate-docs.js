const fs = require("fs");
const path = require("path");
const reactDocs = require("react-docgen");

const srcPath = path.resolve(__dirname, "../../src");
const buildPath = path.resolve(__dirname, "../../lib");
const finalJSON = {};

getComponentsDirectories(srcPath)
  .map(filePath => ({
    name: filePath,
    fileComponentPath: path.join(srcPath, filePath)
  }))
  .forEach(item => {
    const name = item.name;
    const fileComponentPath = item.fileComponentPath;
    const componentInfo = getComponentDoc(fileComponentPath);
    finalJSON[name] = componentInfo;
  });

if (!fs.existsSync(buildPath)) fs.mkdirSync(buildPath);

const content = JSON.stringify(finalJSON, null, 2);
fs.writeFileSync(path.join(buildPath, "docs.json"), content, "utf8");

function getComponentsDirectories(srcpath) {
  return fs
    .readdirSync(srcpath)
    .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory());
}

function getComponentDoc(componentPath) {
  const auth0ComponentPath = path.join(componentPath, "index.js");
  const reactBootstrapComponentPath = path.join(componentPath, "doc.json");

  if (fs.existsSync(auth0ComponentPath)) {
    const componentSrcA = fs.readFileSync(auth0ComponentPath, "utf8");
    const componentInfoA = reactDocs.parse(componentSrcA);

    return componentInfoA;
  }

  const componentSrcB = fs.readFileSync(reactBootstrapComponentPath, "utf8");
  const componentInfoB = JSON.parse(componentSrcB);

  return componentInfoB;
}
