const timeContainer = document.querySelectorAll('.time-container') as NodeListOf<HTMLDivElement>;

timeContainer.forEach((timeWrapper) => {
  const hoursContainer = timeWrapper.querySelector('.hours') as HTMLDivElement;
  const minutesContainer = timeWrapper.querySelector('.minutes') as HTMLDivElement;
  const secondsContainer = timeWrapper.querySelector('.seconds') as HTMLDivElement;

  const hoursValue = hoursContainer.querySelector('.value') as HTMLDivElement;
  const hoursTitle = hoursContainer.querySelector('.title') as HTMLDivElement;

  const minutesValue = minutesContainer.querySelector('.value') as HTMLDivElement;
  const minutesTitle = minutesContainer.querySelector('.title') as HTMLDivElement;

  const secondsValue = secondsContainer.querySelector('.value') as HTMLDivElement;
  const secondsTitle = secondsContainer.querySelector('.title') as HTMLDivElement;

  let leftHours = 0;
  let leftMinutes = 0;
  let leftSeconds = 0;

  function countLeftTime() {
    const date = new Date();
    const localTime = date.toLocaleTimeString("en-US", { hour12: false });

    const arr = localTime.split(':').map((el) => Number(el))

    let currentHours = arr[0];
    let currentMinutes = arr[1];
    let currentSeconds = arr[2];

    if (currentHours === 24) {
      currentHours = 0
    }
    if (currentMinutes === 60) {
      currentMinutes = 0
    }
    if (currentSeconds === 60) {
      currentSeconds = 0
    }

    leftHours = 23 - currentHours;
    leftMinutes = 60 - currentMinutes;
    leftSeconds = 60 - currentSeconds;
  }

  function showTime() {
    countLeftTime();

    hoursValue.innerText = `${leftHours}`;

    if ([23, 22, 4, 3, 2].some((el) => el === leftHours)) {
      hoursTitle.innerText = `часа`
    } else if ([21, 1].some((el) => el === leftHours)) {
      hoursTitle.innerText = `час`
    } else {
      hoursTitle.innerText = `часов`
    }

    minutesValue.innerText = `${leftMinutes}`;

    if ([2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54].some((el) => el === leftMinutes)) {
      minutesTitle.innerText = `минуты`
    } else if ([1, 21, 31, 41, 51].some((el) => el === leftMinutes)) {
      minutesTitle.innerText = `минута`
    } else {
      minutesTitle.innerText = `минут`
    }

    secondsValue.innerText = `${leftSeconds}`;

    if ([2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54].some((el) => el === leftSeconds)) {
      secondsTitle.innerText = `секунды`
    } else if ([1, 21, 31, 41, 51].some((el) => el === leftSeconds)) {
      secondsTitle.innerText = `секунда`
    } else {
      secondsTitle.innerText = `секунд`
    }

  }

  setInterval(showTime, 1000)
})