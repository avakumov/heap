const sliderItems = [...document.querySelectorAll(".hover-slider__item")];
const navItems = [...document.querySelectorAll(".hover-slider-nav__item")];

sliderItems.forEach((item, index) => {
  item.dataset.index = index;

  if (index === 0) {
    item.classList.add("hover-slider__item--active");
  }
});

navItems.forEach((item, index) => {
  item.dataset.index = index;

  if (index === 0) {
    item.classList.add("hover-slider-nav__item--active");
  }
});

const toggleActivity = (index) => {
  for (let i = 0; i < sliderItems.length; i++) {
    if (i === Number(index)) {
      sliderItems[i].classList.add("hover-slider__item--active");
      navItems[i].classList.add("hover-slider-nav__item--active");
    } else {
      sliderItems[i].classList.remove("hover-slider__item--active");
      navItems[i].classList.remove("hover-slider-nav__item--active");
    }
  }
};

document
  .querySelector(".hover-slider-nav")
  .addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("hover-slider-nav__item")) {
      toggleActivity(event.target.dataset.index);
    }
  });
