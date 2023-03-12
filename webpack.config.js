module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
};
