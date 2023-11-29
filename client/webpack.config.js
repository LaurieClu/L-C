module.exports = {
    entry: {
        dev: "./src/App.js",
    },
    output: {
        filename: "./build/App.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx"],
    },
    module: {
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },
    },
};