const poststylus = require("poststylus");
const genDefaultConfig = require("@kadira/storybook/dist/server/config/defaults/webpack.config.js");
const path = require("path");

const DEBUG = process.env.NODE_ENV !== "production";

module.exports = (config, env) => {
  const newConfig = genDefaultConfig(config, env);
  newConfig.entry.preview.push(path.resolve(__dirname, "../src/index.styl"));
  newConfig.module.loaders.push({
    test: /\.styl/,
    loaders: [
      "style-loader",
      `css-loader?${JSON.stringify({
        sourceMap: DEBUG,
        minimize: !DEBUG
      })}`,
      `stylus-loader?${JSON.stringify({
        "include css": true,
        paths: [path.resolve(__dirname, "../node_modules")]
      })}`
    ]
  });

  newConfig.module.loaders.push({
    test: /\.css/,
    loaders: [
      "style-loader",
      `css-loader?${JSON.stringify({
        sourceMap: DEBUG,
        minimize: !DEBUG
      })}`
    ]
  });

  newConfig.stylus = {
    use: [poststylus(["autoprefixer"])]
  };

  return newConfig;
};
