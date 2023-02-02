const daiyCard = document.querySelectorAll('.daily_card_description-container') as NodeListOf<HTMLDivElement>;

daiyCard.forEach((daiyCardWrapper) => {

  const sizeBtns = daiyCardWrapper.querySelectorAll('.size_btn') as NodeListOf<HTMLButtonElement>;
  const colorBtns = daiyCardWrapper.querySelectorAll('.color_btn') as NodeListOf<HTMLButtonElement>;
  const questionBtn = daiyCardWrapper.querySelector('.question') as HTMLDivElement;
  const questionPopup = daiyCardWrapper.querySelector('.question-popup') as HTMLDivElement;
  
  sizeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('inactive')) {
        btn.classList.toggle('select')
      }
    })
  })

  colorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('inactive-btn')) {
        colorBtns.forEach((el) => {
          el.classList.remove('active-btn')
        })

        btn.classList.add('active-btn');

      }
    })
  })

  questionBtn.addEventListener('click', () => {
    questionPopup.classList.toggle('question-popup-inactive')
  })

})