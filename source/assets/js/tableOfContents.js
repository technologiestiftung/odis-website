const CONTENT_CONTAINER_ID = "toc-content";
const TARGET_ID = "toc-target";
const TOC_LABEL_ELEMENT_ID = "toc-label";

const headings = getContentHeadings();

const tocNav = createTocNav(TOC_LABEL_ELEMENT_ID);
const list = createList();
tocNav.appendChild(list);

headings.forEach((heading) => {
  appendTocEntry(heading, list);
  replaceContentHeadingWithAnchorHeading(heading);
});

const target = document.getElementById(TARGET_ID);
target.appendChild(tocNav);

/**
 * Retrieves all (non-h1) headings from the content container.
 * @returns NodeListOf<Element>
 */
function getContentHeadings() {
  const contentContainer = document.getElementById(CONTENT_CONTAINER_ID);
  return contentContainer.querySelectorAll("h2, h3, h4, h5, h6");
}

/**
 * Returns a nav element that holds the TOC.
 * @param {string} labelElementId The DOM ID of the element used for labelling the TOC.
 * @returns HTMLElement
 */
function createTocNav(labelElementId) {
  const tocNav = document.createElement("nav");
  tocNav.setAttribute("id", "toc");
  tocNav.setAttribute("aria-labelledby", labelElementId);
  return tocNav;
}

/**
 * Returns a styled ul element for the TOC lis items.
 * @returns HTMLUListElement
 */
function createList() {
  const list = document.createElement("ul");
  list.setAttribute("class", "toc-list mt-5 grid gap-3");
  return list;
}

/**
 * Returns a styled li element for the TOC link item.
 * @returns HTMLLiElement
 */
function createListItem() {
  const listItem = document.createElement("li");
  listItem.setAttribute(
    "class",
    "transition-colors text-links hover-hover:hover:text-links-active",
  );
  return listItem;
}

/**
 * Appends a link to the TOC based on the provided heading.
 * @param {HTMLHeadingElement} heading
 * @param {HTMLUListElement} listElement
 */
function appendTocEntry(heading, listElement) {
  const link = document.createElement("a");
  link.setAttribute("href", "#" + slugify(heading.textContent));

  const text = document.createTextNode(heading.textContent);
  link.appendChild(text);

  const getOffsetByLevel = (n) => (n == 2 ? 0 : Math.ceil(Math.exp(n)));
  const headingLevel = parseInt(heading.tagName.replace(/h/i, ""), 10);

  const listItem = createListItem();
  listItem.style.transform = `translateX(${getOffsetByLevel(headingLevel)}px)`;
  listItem.classList.add("leading-tight");

  listItem.appendChild(link);
  listElement.appendChild(listItem);
}

/**
 * Replaces a heading in the content container with the same heading, just wrapped in an anchor tag for navigating to it.
 * @param {HTMLHeadingElement} heading
 */
function replaceContentHeadingWithAnchorHeading(heading) {
  const headingLink = document.createElement("a");
  headingLink.setAttribute("id", slugify(heading.textContent));
  headingLink.setAttribute("class", "no-underline");
  headingLink.appendChild(heading.cloneNode(true));
  heading.parentNode.replaceChild(headingLink, heading);
}

/**
 * Slugifies the provided text.
 * @param {string} text
 * @returns string
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/(<([^>]+)>)/gi, "")
    .replace(/ |&amp;/gi, " ")
    .replace(/[^a-zA-Z0-9]/gi, "")
    .replace(/ /gi, "-")
    .replace(/-+/gi, "-")
    .toLowerCase();
}
