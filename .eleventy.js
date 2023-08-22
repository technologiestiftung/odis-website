const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("source/**/*.jpg");
  eleventyConfig.addPassthroughCopy("source/**/*.ico");
  eleventyConfig.addPassthroughCopy("source/**/*.svg");
  eleventyConfig.addPassthroughCopy("source/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("source/**/*.png");
  eleventyConfig.addPassthroughCopy("source/**/*.pdf");
  eleventyConfig.addPassthroughCopy("source/**/*.csv");
  eleventyConfig.addPassthroughCopy("source/**/*.xlsx");
  eleventyConfig.addPassthroughCopy("source/**/*.docx");
  eleventyConfig.addPassthroughCopy("source/**/*.json");
  eleventyConfig.addPassthroughCopy("source/**/*.geojson");

  eleventyConfig.addPassthroughCopy("source/assets/allris/allris_streets.html");
  eleventyConfig.addPassthroughCopy("source/assets/fonts/");
  eleventyConfig.addPassthroughCopy("source/assets/js/*.js");

  // grundsicherung files
  eleventyConfig.addPassthroughCopy(
    "source/projekte/grundsicherung/src/fonts/*"
  );
  eleventyConfig.addPassthroughCopy("source/projekte/grundsicherung/js/*");
  eleventyConfig.addPassthroughCopy("source/projekte/grundsicherung/public/*");
  eleventyConfig.addPassthroughCopy("source/projekte/grundsicherung/*.css*");
  // eleventyConfig.addPassthroughCopy(
  // "source/projekte/grundsicherung/config.json"
  // );

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
