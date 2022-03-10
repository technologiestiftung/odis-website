const config = {
  plugins: [require("autoprefixer")],
};

config.plugins = [
  ...config.plugins,
  require("cssnano")({
    preset: "default",
  }),
];

module.exports = config;
