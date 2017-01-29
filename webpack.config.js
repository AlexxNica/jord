const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "jord.ts",
    library: "jord",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};
