const cardsItems = document.querySelectorAll('.cards__item');
console.log(cardsItems);
const popupClose = document.querySelector('.popup__close');
const popupWindow = document.querySelector('.popup__window');


cardsItems.forEach(cardsItem => {
    cardsItem.addEventListener('click', function() {
        popupWindow.classList.remove('hide');
        popupWindow.classList.add('show');
    })
});


popupClose.addEventListener('click', function() {
    popupWindow.classList.remove('show');
    popupWindow.classList.add('hide');
})
