const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "jord.js",
        library: "jord",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {test: /\.ts$/, enforce: "pre", loader: "tslint-loader"},
            {test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/}
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
};
