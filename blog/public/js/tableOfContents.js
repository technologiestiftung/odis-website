function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}
function slugifyGerman(string) {
  return slugify(
    string
      .replace(/[äÄ]/g, "ae")
      .replace(/[öÖ]/g, "oe")
      .replace(/[üÜ]/g, "ue")
      .replace(/[ß]/g, "ss"),
  );
}

function createTableOfContents(contentClass, targetId) {
  const content = [...document.querySelectorAll(contentClass)];
  const headings = content.reduce(
    (acc, tocContentNode) => [
      ...acc,
      ...tocContentNode.querySelectorAll("h2, h3, h4, h5, h6"),
    ],
    [],
  );
  const toc = document.createElement("nav");
  toc.setAttribute("id", "toc");
  toc.setAttribute("aria-label", "Table of Contents");

  let currentLevel = 0;
  const lists = [];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = toc.querySelector(`a[href="#${entry.target.id}"]`);
      if (link && entry.isIntersecting) {
        link.classList.add("font-bold");
      } else if (link) {
        link.classList.remove("font-bold");
      }
    });
  });

  headings.forEach((heading) => {
    const slug = slugifyGerman(heading.textContent);
    const level = parseInt(heading.tagName.slice(1));

    while (level < currentLevel) {
      lists.pop();
      currentLevel--;
    }

    if (level > currentLevel) {
      const newList = document.createElement("ul");
      newList.classList.add(
        "flex",
        "flex-col",
        "list-none",
        "gap-4",
        "pt-4",
        currentLevel > 0 ? "pl-4" : undefined,
      );
      if (lists.length === 0) {
        toc.appendChild(newList);
      } else if (lists.at(-1).lastChild) {
        lists.at(-1).lastChild.appendChild(newList);
      } else {
        lists.at(-1).appendChild(newList);
      }
      lists.push(newList);
      currentLevel = level;
    }

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    const text = document.createTextNode(heading.textContent);

    const headingLink = document.createElement("a");
    headingLink.setAttribute("id", slug);
    headingLink.setAttribute("href", "#" + slug);
    const linkClasses = [
      "block",
      "text-links",
      "hover:text-links-active",
      "transition-colors",
      "no-underline",
      "focusable",
    ];
    headingLink.classList.add(...linkClasses);
    headingLink.appendChild(heading.cloneNode(true));
    heading.parentNode.replaceChild(headingLink, heading);

    observer.observe(headingLink);

    link.setAttribute("href", "#" + slug);
    link.appendChild(text);
    link.classList.add(...linkClasses);
    listItem.appendChild(link);
    lists[lists.length - 1].appendChild(listItem);
  });

  const target = document.getElementById(targetId);
  target.appendChild(toc);
}

createTableOfContents(".toc-content", "toc-target");
