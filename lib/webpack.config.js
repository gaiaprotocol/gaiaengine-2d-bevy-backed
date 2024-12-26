import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const config = {
    entry: {
        "bundle": "./src/test.ts",
        __less: "./test/style/main.less",
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    }, "less-loader"],
            },
            {
                test: /\.ya?ml$/,
                use: "yaml-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".less"],
        extensionAlias: {
            ".js": [".js", ".ts"],
        },
    },
    output: {
        filename: "[name].js",
        path: path.resolve("test"),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),
    ],
};
export default config;
//# sourceMappingURL=webpack.config.js.map