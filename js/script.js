const vacancies = document.querySelectorAll(".vacancy");
const popupClose = document.querySelector(".popup__close");
const popupWindow = document.querySelector(".popup__window");

const vacanciesFilterArrow = document.querySelector(".vacancies__filter-arrow");
const filterForm = document.querySelector(".filter__form");
const filterArrow = document.querySelector(".vacancies__arrow");

// логика открытия popup
vacancies.forEach((vacancy) => {
  vacancy.addEventListener("click", function () {
    popupWindow.classList.toggle("show");
  });

  vacancy.addEventListener("keypress", function (event) {
    if (event.code === "Enter") {
      popupWindow.classList.toggle("show");
    }
  });
});

popupClose.addEventListener("click", function () {
  popupWindow.classList.remove("show");
});

// Открытие, закрытие фильтров на экране < 925
vacanciesFilterArrow.addEventListener("click", function () {
  let widthScreen = document.querySelector("body").offsetWidth;
  if (widthScreen < 925) {
    filterForm.classList.toggle("show__flex");
    filterArrow.classList.toggle("arrow__down");
  }
});
