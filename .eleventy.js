const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("source/**/*.jpg");
  eleventyConfig.addPassthroughCopy("source/**/*.png");
  eleventyConfig.addPassthroughCopy("source/assets/*.png");
  eleventyConfig.addPassthroughCopy("source/assets/css/*.css");
  eleventyConfig.addPassthroughCopy("source/assets/js/*.js");
  eleventyConfig.addPassthroughCopy("source/assets/css/**/*.css.map");

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
