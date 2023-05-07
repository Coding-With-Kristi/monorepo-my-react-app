const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");

const fs = require('node-fs');

function getDirectories(path) {
  return fs.readdirSync(path, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

// Example usage:
const directories = getDirectories('./packages/components');
const packages = directories.map(directoryPath => path.join(__dirname, './packages/components/'+directoryPath));

module.exports = {
  webpack: {
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }
      return webpackConfig;
    },
  },
};
