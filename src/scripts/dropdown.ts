const dropdownElements = document.querySelectorAll('.dropdown');

dropdownElements.forEach((dropdownWrapper) => {
  const dropdownBtn = dropdownWrapper.querySelector('.dropdown_btn') as HTMLButtonElement;
  const dropdownList = dropdownWrapper.querySelector('.dropdown_list') as HTMLUListElement;
  const dropdownListItems = dropdownWrapper.querySelectorAll('.dropdown_list-item') as NodeListOf<HTMLLIElement>;

  dropdownBtn.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown_list-visible');

    if (dropdownBtn.classList.contains('dropdown_btn-active')) {
      dropdownBtn.classList.remove('dropdown_btn-active');
    } else {
      dropdownBtn.classList.add('dropdown_btn-active');
    }
  })



  dropdownListItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      const listItem = event.target as HTMLLIElement;
      event.stopPropagation();

      if (!listItem.classList.contains('active')) {
        dropdownListItems.forEach((item) =>
          item.classList.remove('active'))
        listItem.classList.add('active')
      }

      dropdownBtn.innerText = listItem.innerText;

      dropdownBtn.classList.remove('dropdown_btn-active');
      dropdownList.classList.remove('dropdown_list-visible');
    })
  })

  document.addEventListener('click', (event) => {
    if (event.target !== dropdownBtn) {
      dropdownBtn.classList.remove('dropdown_btn-active')
      dropdownList.classList.remove('dropdown_list-visible');
    }
  })
})
