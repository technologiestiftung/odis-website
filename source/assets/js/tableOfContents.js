function createTableOfContents(containerId, targetId) {
  const container = document.getElementById(containerId);
  const headings = container.querySelectorAll("h2, h3, h4, h5, h6");
  const toc = document.createElement("nav");
  const list = document.createElement("ul");
  toc.setAttribute("id", "toc");
  toc.setAttribute("aria-labelledby", "toc-label");
  list.setAttribute("class", "toc-list mt-5 grid gap-3");
  toc.appendChild(list);
  headings.forEach((heading) => {
    const listItem = document.createElement("li");
    listItem.setAttribute(
      "class",
      "transition-colors text-links hover-hover:hover:text-links-active",
    );
    const link = document.createElement("a");
    const text = document.createTextNode(heading.textContent);
    const slug = heading.textContent
      .toLowerCase()
      .replace(/(<([^>]+)>)/gi, "")
      .replace(/ |&amp;/gi, " ")
      .replace(/[^a-zA-Z0-9]/gi, "")
      .replace(/ /gi, "-")
      .replace(/-+/gi, "-")
      .toLowerCase();
    const headingLink = document.createElement("a");
    headingLink.setAttribute("id", slug);
    headingLink.setAttribute("class", "no-underline");
    headingLink.appendChild(heading.cloneNode(true));
    heading.parentNode.replaceChild(headingLink, heading);

    link.setAttribute("href", "#" + slug);
    link.appendChild(text);

    /**
     * Calculates a horizontal offset based on the heading level that can be used for indenting elements.
     * @param {number} n
     * @returns number
     */
    const getOffsetByLevel = (n) => (n == 2 ? 0 : Math.ceil(Math.exp(n)));

    const headingLevel = parseInt(heading.tagName.replace(/h/i, ""), 10);

    listItem.style.transform = `translateX(${getOffsetByLevel(
      headingLevel,
    )}px)`;
    listItem.classList.add("leading-tight");

    listItem.appendChild(link);
    list.appendChild(listItem);
  });
  const target = document.getElementById(targetId);
  target.appendChild(toc);
}

createTableOfContents("toc-content", "toc-target");
