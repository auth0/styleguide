const fs = require('fs');
const path = require('path');
const reactDocs = require('react-docgen');

const srcPath = path.resolve(__dirname, '../../src');
const buildPath = path.resolve(__dirname, '../../build');
const finalJSON = {};

getComponentsDirectories(srcPath)
  .map(filePath => ({
    name: filePath,
    fileComponentPath: path.join(srcPath, filePath, 'index.js')
  }))
  .forEach(item => {
    const name = item.name;
    const fileComponentPath = item.fileComponentPath;
    const componentSrc = fs.readFileSync(fileComponentPath, 'utf8');
    const componentInfo = reactDocs.parse(componentSrc);
    finalJSON[name] = componentInfo;
  });

if (!fs.existsSync(buildPath)) fs.mkdirSync(buildPath);

const content = JSON.stringify(finalJSON, null, 2);
fs.writeFileSync(path.join(buildPath, 'docs.json'), content, 'utf8');

function getComponentsDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(file =>
    fs.statSync(path.join(srcpath, file)).isDirectory()
  );
}
