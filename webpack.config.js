module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // 启用源映射以调试webpack的输出。
    devtool: "source-map",

    resolve: {
        // 添加'.ts'和'.tsx'作为可解析的扩展名。
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // 所有带有'.ts'或'.tsx'扩展名的文件都将由'awesome-typescript-loader'处理。
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // 所有输出'.js'文件都将由'source-map-loader'重新处理任何源图。
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // 当导入路径与以下之一匹配的模块时，只需假设存在相应的全局变量并使用它。这很重要，因为它允许我们避免捆绑所有依赖项，这允许浏览器在构建之间缓存这些库。
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};