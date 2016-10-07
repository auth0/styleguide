const fs = require('fs');
const path = require('path');
const reactDocs = require('react-docgen');

const srcPath = path.resolve(__dirname, '../../src');
const buildPath = path.resolve(__dirname, '../../build');

getComponentsDirectories(srcPath)
  .map(filePath => path.join(srcPath, filePath, 'index.js'))
  .forEach(fileComponent => {
    const componentSrc = fs.readFileSync(fileComponent, 'utf8');
    const componentInfo = reactDocs.parse(componentSrc);
    const file = generateDestFile(fileComponent);
    const content = JSON.stringify(componentInfo, null, 2);

    fs.writeFileSync(file, content, 'utf8');
  });

function getComponentsDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(file =>
    fs.statSync(path.join(srcpath, file)).isDirectory()
  );
}

function generateDestFile(fileComponent) {
  const withBuildDir = fileComponent.replace(srcPath, buildPath);
  const withJsonExt = withBuildDir.replace('/index.js', '.json');

  return withJsonExt;
}
