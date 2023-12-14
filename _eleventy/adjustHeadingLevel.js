function getHeadingLevel(tagName) {
  if (tagName[0].toLowerCase() === "h") {
    tagName = tagName.slice(1);
  }

  return parseInt(tagName, 10);
}

// Credit: Rodney Rehm @rodneyrehm
// https://gist.github.com/rodneyrehm/4feec9af8a8635f7de7cb1754f146a39
module.exports = function adjustHeadingLevel(md, options) {
  let firstLevel = options.firstLevel;

  if (typeof firstLevel === "string") {
    firstLevel = getHeadingLevel(firstLevel);
  }

  if (!firstLevel || isNaN(firstLevel)) return;

  const levelOffset = firstLevel - 1;
  if (levelOffset < 1 || levelOffset > 6) return;

  md.core.ruler.push("adjust-heading-levels", function (state) {
    const tokens = state.tokens;
    for (var i = 0; i < tokens.length; i++) {
      if (tokens[i].type !== "heading_close") {
        continue;
      }

      const headingOpen = tokens[i - 2];
      const headingClose = tokens[i];

      const currentLevel = getHeadingLevel(headingOpen.tag);
      const tagName = "h" + Math.min(currentLevel + levelOffset, 6);

      headingOpen.tag = tagName;
      headingClose.tag = tagName;
    }
  });
};
