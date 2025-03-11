// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     port: 8081,
//     proxy: {
//       "/api": {
//         target: "https://52.59.240.119",
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });

const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: "/", // ✅ Important for AWS
  devServer: {
    port: 8081,
    proxy: {
      "/api": {
        target: "https://52.59.240.119",
        changeOrigin: true,
        secure: false, // Disable SSL verification for development
      },
    },
  },
  configureWebpack: {
    resolve: {
      fallback: {
        https: false, // Exclude Node.js `https` module for the browser
      },
    },
  },
});
