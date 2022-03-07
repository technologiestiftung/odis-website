const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("source/**/*.jpg");
  eleventyConfig.addPassthroughCopy("source/**/*.svg");
  eleventyConfig.addPassthroughCopy("source/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("source/**/*.png");
  eleventyConfig.addPassthroughCopy("source/assets/file-download/");
  eleventyConfig.addPassthroughCopy("source/assets/charts/");
  eleventyConfig.addPassthroughCopy("source/assets/allris/");
  eleventyConfig.addPassthroughCopy("source/assets/fonts/");
  eleventyConfig.addPassthroughCopy("source/assets/css/*.css");
  eleventyConfig.addPassthroughCopy("source/assets/js/*.js");
  eleventyConfig.addPassthroughCopy("source/assets/css/**/*.css.map");

  // grundsicherung files
  eleventyConfig.addPassthroughCopy("source/projekte/grundsicherung/data");
  eleventyConfig.addPassthroughCopy("source/projekte/grundsicherung/js");
  eleventyConfig.addPassthroughCopy("source/projekte/grundsicherung/public");
  eleventyConfig.addPassthroughCopy("source/projekte/grundsicherung/*.css*");
  eleventyConfig.addPassthroughCopy(
    "source/projekte/grundsicherung/config.json"
  );

  // Return your Object options:
  return {
    dir: {
      input: "source",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
