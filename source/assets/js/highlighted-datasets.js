const highlightedDatasetsList = document
  .getElementById("highlighted-datasets")
  .querySelectorAll("div[data-highlighted-dataset-index]");

/*
------------------------------------------------------------
SLIDER (mobile screen sizes)
------------------------------------------------------------
*/
const INITIAL_SLIDE_INDEX = 1;

if (window.Swiper && window.tippy) {
  const swiper = new window.Swiper(".swiper", {
    slidesPerView: 1.4,
    spaceBetween: 24,
    breakpoints: {
      480: {
        slidesPerView: 1.8,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 2.2,
        spaceBetween: 48,
      },
    },
    initialSlide: INITIAL_SLIDE_INDEX,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    a11y: {
      nextSlideMessage: "Nächster Datensatz",
      prevSlideMessage: "Vorheriger Datensatz",
    },
  });

  const initialInfoElement = [...highlightedDatasetsList][INITIAL_SLIDE_INDEX];
  const initialSlide = swiper.slides[INITIAL_SLIDE_INDEX];

  if (initialInfoElement && initialSlide) {
    initialInfoElement.classList.remove("hidden");
    alignHorizontally(initialInfoElement, initialSlide);
  }

  swiper.on("transitionEnd", function (swiper) {
    [...highlightedDatasetsList].forEach((element) => {
      const isActive =
        element.dataset.highlightedDatasetIndex ===
        `${Number(swiper.activeIndex)}`;

      element.classList.toggle("hidden", !isActive);

      if (isActive) {
        const activeSlide = swiper.slides[swiper.activeIndex];
        alignHorizontally(element, activeSlide);
      }
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
      (element) => element.dataset.highlightedDatasetId === group.id,
    );

    if (infoElement) {
      window.tippy(group, {
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
        onTrigger(instance) {
          instance.reference.classList.add("wimmelbild_puzzle-piece--hovered");
          wimmelbildGroups.forEach((group) => {
            if (group.id === instance.reference.id) return;
            group.classList.add("wimmelbild_puzzle-piece--hovered-out");
          });
        },
        onUntrigger() {
          wimmelbildGroups.forEach((group) => {
            group.classList.remove(
              "wimmelbild_puzzle-piece--hovered",
              "wimmelbild_puzzle-piece--hovered-out",
            );
          });
        },
      });
    }
  });
}

/**
 * Aligns two elements horizontally by taking the positioning of the referenceElement and applying its left offset as a horizontal padding to the targetElement.
 * @param {HTMLElement} targetElement
 * @param {HTMLElement} referenceElement
 */
function alignHorizontally(targetElement, referenceElement) {
  const referenceOffset = referenceElement.getBoundingClientRect().left;

  targetElement.style.paddingLeft = `${referenceOffset}px`;
  targetElement.style.paddingRight = `${referenceOffset}px`;
}
