const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081,
    proxy: {
      "/api": {
        target: "http://52.59.240.119/api",
        changeOrigin: true,
      },
    },
  },
});
