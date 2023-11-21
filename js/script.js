const vacancies = document.querySelectorAll('.vacancy');
const popupClose = document.querySelector('.popup__close');
const popupWindow = document.querySelector('.popup__window');


vacancies.forEach(vacancy => {
    vacancy.addEventListener('click', function() {
        popupWindow.classList.remove('hide');
        popupWindow.classList.add('show');
    })

    vacancy.addEventListener('keypress', function(event) {
        if (event.code === 'Enter') {
            popupWindow.classList.remove('hide');
            popupWindow.classList.add('show');
        }
    })
});


popupClose.addEventListener('click', function() {
    popupWindow.classList.remove('show');
    popupWindow.classList.add('hide');
})
