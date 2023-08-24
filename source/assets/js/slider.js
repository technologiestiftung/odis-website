const highlightedDatasetsList = document
  .getElementById("highlighted-datasets")
  .querySelectorAll("li");

const targetEl = document.getElementById("highlighted");

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
});

const firstEl = [...highlightedDatasetsList][INITIAL_SLIDE_INDEX];
targetEl.innerHTML = firstEl.innerHTML;

swiper.on("transitionEnd", function () {
  const el = [...highlightedDatasetsList].find((eli) => {
    return (
      eli.dataset.highlightedDatasetIndex ===
      `${Number(swiper.activeIndex + 1)}`
    );
  });

  targetEl.innerHTML = el.innerHTML;
});
