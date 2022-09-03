const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { DefinePlugin } = require("webpack");

const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
    //For Webpack 5, replace target: 'node' with the externalsPreset object:
    // target: "node",
    externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    mode: NODE_ENV ? NODE_ENV : "development",
    entry: path.resolve(__dirname, "../src/server/server.js"),
    output: {
        globalObject: "this",
        filename: "server.js",
        path: path.resolve(__dirname, "../dist/server"),
    },
    resolve: {
        extensions: [".js", ".jsx", ".tsx", ".ts", ".json"],
    },
    module: {
        rules: [
            { test: /\.[tj]sx$/, use: ["ts-loader"] },
            { test: /\.[tj]s$/, use: ["ts-loader"] },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: "[name]__[local]--[hash:base64:5]",
                            },
                            onlyLocals: true,
                        },
                    },
                ],
                exclude: GLOBAL_CSS_REGEXP,
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ["css-loader"],
            },
        ],
    },
    optimization: {
        // minimize the output files
        minimize: false,
    },
    plugins: [new DefinePlugin({ "process.env.CLIENT_ID": `'${process.env.CLIENT_ID}'` })],
};
