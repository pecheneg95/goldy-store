const saleCardSliders = document.querySelectorAll('.sale_card_img_slider-container') as NodeListOf<HTMLDivElement>;

saleCardSliders.forEach((sliderWrapper) => {
  const cardContainer = sliderWrapper.querySelector(".card_img_slider-container") as HTMLDivElement;
  const cardCollection = sliderWrapper.querySelectorAll(".sale_card_img") as NodeListOf<HTMLDivElement>;
  const sliderButtons = sliderWrapper.querySelectorAll(".slider-button") as NodeListOf<HTMLDivElement>;

  let isAnimate = false;  

  sliderWrapper.addEventListener('mouseover', () =>{
   const intervalId = setInterval(()=> {
      if (!isAnimate) {
        slideToLeft();
      }
    }, 500)

    sliderWrapper.addEventListener('mouseleave', ()=>{
      clearInterval(intervalId);
    })
  })

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

        if (el.classList.contains("img1")) {
          sliderButtons.forEach((el) => {
            el.classList.remove("slider-button-active");
          });

          sliderButtons[1].classList.add("slider-button-active");
        }

        if (el.classList.contains("img2")) {
          sliderButtons.forEach((el) => {
            el.classList.remove("slider-button-active");
          });

          sliderButtons[2].classList.add("slider-button-active");
        }

        if (el.classList.contains("img3")) {
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
