const dependencies = require("../package.json").dependencies;

module.exports = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
