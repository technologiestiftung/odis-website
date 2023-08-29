const highlightedDatasetsList = document
  .getElementById("highlighted-datasets")
  .querySelectorAll(`div[data-highlighted-dataset-index]`);

/*
------------------------------------------------------------
SLIDER (mobile screen sizes)
------------------------------------------------------------
*/
const INITIAL_SLIDE_INDEX = 1;

const swiper = new Swiper(".swiper", {
  slidesPerView: 1.4, // 2.2 or similar on tablet size
  initialSlide: INITIAL_SLIDE_INDEX,
  centeredSlides: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  a11y: {
    nextSlideMessage: "Nächster Datensatz",
    prevSlideMessage: "Vorheriger Datensatz",
  },
});

[...highlightedDatasetsList][INITIAL_SLIDE_INDEX].classList.remove("hidden");

swiper.on("transitionEnd", function () {
  [...highlightedDatasetsList].forEach((element) => {
    const isActive =
      element.dataset.highlightedDatasetIndex ===
      `${Number(swiper.activeIndex)}`;

    element.classList.toggle("hidden", !isActive);
  });
});

/*
------------------------------------------------------------
WIMMELBILD (medium and large screen sizes)
------------------------------------------------------------
*/
const wimmelbildSvg = document.getElementById("wimmelbild");
wimmelbildSvg.setAttribute("role", "list");

const wimmelbildGroups = document.querySelectorAll("#wimmelbild > g");

wimmelbildGroups.forEach((group) => {
  group.setAttribute("tabindex", 0);
  group.setAttribute("role", "listitem");
  group.setAttribute("aria-labelledby", `${group.id}-title`);
  group.setAttribute("aria-describedby", `${group.id}-description`);
});

wimmelbildGroups.forEach((group) => {
  const infoElement = [...highlightedDatasetsList].find(
    (element) => element.dataset.highlightedDatasetId === group.id
  );

  if (infoElement) {
    tippy(group, {
      theme: "light-border",
      interactive: true,
      delay: 100,
      content: infoElement.innerHTML,
      allowHTML: true,
      offset: 0,
      placement: "bottom",
      // We can't use tippy's aria features because our setup with triggers within an SVG
      // messes up the aria connections and focus handling.
      aria: {
        content: null,
        expanded: false,
      },
      appendTo: document.getElementById("wimmelbild-container"),
    });
  }
});
