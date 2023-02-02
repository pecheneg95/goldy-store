const limitedSliders = document.querySelectorAll('.limited-slider-container') as NodeListOf<HTMLDivElement>;

limitedSliders.forEach((sliderWrapper) => {
  const cardContainer = sliderWrapper.querySelector(".limited-slider_card-container") as HTMLDivElement;
  const sliderLeftArrow = sliderWrapper.querySelector(".slider_left-arrow") as HTMLDivElement;
  const sliderRightArrow = sliderWrapper.querySelector(".slider_right-arrow") as HTMLDivElement;
  const visibleContainer = sliderWrapper.querySelector(".slider_visible-card") as HTMLDivElement;
  const cards = cardContainer.querySelectorAll(".limited-slider_card") as NodeListOf<HTMLDivElement>;
  const cardWidth = cards[0].offsetWidth;

  let cardIndex = 0;
  let isAnimate = false;
  let countVisibleCard = Math.floor(visibleContainer.offsetWidth / cardWidth);

  window.addEventListener('resize', () => {
    countVisibleCard = Math.floor(visibleContainer.offsetWidth / cardWidth);
  });

  sliderLeftArrow.addEventListener("click", () => {
    if (!isAnimate && !sliderLeftArrow.classList.contains('inactive-arrow')) {
      cardIndex--
      slideToRight();
    }

    checkInactiveArrow(cardIndex)
  });

  sliderRightArrow.addEventListener("click", () => {
    if (!isAnimate && !sliderRightArrow.classList.contains('inactive-arrow')) {
      cardIndex++
      slideToLeft();
    }

    checkInactiveArrow(cardIndex)
  });

  function checkInactiveArrow(cardIndex: number) {
    console.log('cardIndex', cardIndex)
    if (cardIndex === 0) {
      sliderLeftArrow.classList.add('inactive-arrow')
    } else if (cardIndex + countVisibleCard === cards.length) {
      sliderRightArrow.classList.add('inactive-arrow')
    } else {
      sliderLeftArrow.classList.remove('inactive-arrow')
      sliderRightArrow.classList.remove('inactive-arrow')
    }
  }

  function slideToRight() {
    isAnimate = true;
    const currentPosition = Number(cardContainer.style.left.slice(0, -2));
    cardContainer.style.left = `${currentPosition + cardWidth + 20}px`

    setTimeout(() => {
      isAnimate = false;
    }, 500);
  }

  function slideToLeft() {
    isAnimate = true;
    const currentPosition = Number(cardContainer.style.left.slice(0, -2));

    cardContainer.style.left = `${currentPosition - cardWidth - 20}px`

    setTimeout(() => {
      isAnimate = false;
    }, 500);
  }
})
