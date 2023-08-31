function createTableOfContents(containerId, targetId) {
  const container = document.getElementById(containerId);
  const headings = container.querySelectorAll("h2, h3, h4, h5, h6");
  const toc = document.createElement("nav");
  const list = document.createElement("ul");
  toc.setAttribute("id", "toc");
  toc.setAttribute("aria-label", "Table of Contents");
  list.setAttribute("class", "toc-list");
  toc.appendChild(list);
  headings.forEach((heading) => {
    const listItem = document.createElement("li");
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
    headingLink.setAttribute("class", "anchor");
    headingLink.appendChild(heading.cloneNode(true));
    heading.parentNode.replaceChild(headingLink, heading);

    link.setAttribute("href", "#" + slug);
    link.appendChild(text);
    listItem.appendChild(link);
    list.appendChild(listItem);
  });
  const target = document.getElementById(targetId);
  target.appendChild(toc);
}

createTableOfContents("toc-content", "toc-target");
