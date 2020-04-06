const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src/single-spa-config.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        disableHostCheck: true,
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
    },
    externals: ["microfrontend-react-sspa", /^microfrontend-react-sspa\/.+$/]
}