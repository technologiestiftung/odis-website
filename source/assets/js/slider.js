const highlightedDatasetsList = document
  .getElementById("highlighted-datasets")
  .querySelectorAll(`div[data-highlighted-dataset-index]`);

const INITIAL_SLIDE_INDEX = 1;

const swiper = new Swiper(".swiper", {
  slidesPerView: 1.4,
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
