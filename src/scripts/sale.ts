const cards = document.querySelectorAll(".sale_card") as NodeListOf<HTMLDivElement>;

cards.forEach((card) => {
  const cardContainer = card.querySelector('.sale_card-container') as HTMLDivElement;

  cardContainer.addEventListener('mouseover', () => {
    cardContainer.classList.add('sale_card-select')
  })

  cardContainer.addEventListener('mouseleave', () => {
    cardContainer.classList.remove('sale_card-select')
  })
})