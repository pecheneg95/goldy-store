const infiniteSliders = document.querySelectorAll('.infinite-slider-container') as NodeListOf<HTMLDivElement>;

infiniteSliders.forEach((sliderWrapper) => {
  const cardContainer = sliderWrapper.querySelector(".infinite-slider_card-container") as HTMLDivElement;
  const cardCollection = sliderWrapper.querySelectorAll(".infinite-slider_card") as NodeListOf<HTMLDivElement>;
  const sliderButtons = sliderWrapper.querySelectorAll(".slider-button") as NodeListOf<HTMLDivElement>;
  const sliderLeftArrow = sliderWrapper.querySelector(".slider_left-arrow") as HTMLDivElement;
  const sliderRightArrow = sliderWrapper.querySelector(".slider_right-arrow") as HTMLDivElement;

  let isAnimate = false;

  sliderLeftArrow.addEventListener("click", () => {
    if (!isAnimate) {
      slideToRight();
    }
  });

  sliderRightArrow.addEventListener("click", () => {
    if (!isAnimate) {
      slideToLeft();
    }
  });

  function decrementIndex() {
    cardCollection.forEach((el) => {
      if (el.dataset.index) {
        el.dataset.index = String(Number(el.dataset.index) - 1);

        if (el.dataset.index === "0") {
          el.dataset.index = "3";
        }

        el.style.order = el.dataset.index;
      }
    });
  }

  function incrementIndex() {
    cardCollection.forEach((el) => {
      el.dataset.index = String(Number(el.dataset.index) + 1);

      if (el.dataset.index === "4") {
        el.dataset.index = '1';
      }

      el.style.order = el.dataset.index;
    });
  }

  function slideToRight() {
    isAnimate = true;
    cardContainer.classList.add("toright");

    setTimeout(() => {
      cardContainer.classList.remove("toright");

      incrementIndex();

      setActiveImage();

      isAnimate = false;
    }, 500);
  }

  function slideToLeft() {
    isAnimate = true;
    cardContainer.classList.add("toleft");

    setTimeout(() => {
      cardContainer.classList.remove("toleft");

      decrementIndex();
      setActiveImage();

      isAnimate = false;
    }, 500);
  }

  function setActiveImage() {
    cardCollection.forEach((el) => {
      if (el.dataset.index === "1") {

        if (el.classList.contains("card1")) {
          sliderButtons.forEach((el) => {
            el.classList.remove("slider-button-active");
          });

          sliderButtons[1].classList.add("slider-button-active");
        }

        if (el.classList.contains("card2")) {
          sliderButtons.forEach((el) => {
            el.classList.remove("slider-button-active");
          });

          sliderButtons[2].classList.add("slider-button-active");
        }

        if (el.classList.contains("card3")) {
          sliderButtons.forEach((el) => {
            el.classList.remove("slider-button-active");
          });

          sliderButtons[0].classList.add("slider-button-active");
        }
      }
    });
  }

  setActiveImage();
})
